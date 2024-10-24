import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      console.log(result.user); // Make sure result.user is logged
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };

      const res = await axiosPublic.post("/users", userInfo);
      console.log(res.data); // Log the response data

      // Navigate after the data is successfully posted
      navigate("/", { replace: true }); // replace: true prevents going back to login after navigation
    } catch (error) {
      console.error("Google Sign-In failed", error);
    }
  };

  return (
    <div className="w-full">
      <div className="divider w-[82%] ml-[34px]">OR</div>
      <div className="w-full">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-md w-[83%] ml-[32px] mb-5"
        >
          <FcGoogle className="" />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
