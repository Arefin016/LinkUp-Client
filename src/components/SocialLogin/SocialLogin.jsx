import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
      });
  };

  return (
    <div className="w-full">
      <div className="divider w-[82%] ml-[34px]">OR</div>
      <div className="w-full">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-md w-[83%] ml-[32px] mb-5 flex items-center gap-2"
        >
          <FcGoogle className="text-xl" />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
