import { FcGoogle } from "react-icons/fc"
import useAuth from "../../hooks/useAuth"
import useAxiosPublic from "../../hooks/useAxiosPublic"
import { useNavigate } from "react-router-dom"

const SocialLogin = () => {
  const { googleSignIn } = useAuth()
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => { // Make the function async
    try {
      const result = await googleSignIn(); // Await the Google sign-in
      const user=result.user;
      
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        img: result.user?.photoURL,
        date: new Date().toLocaleString(),
        role: 'user'
      };
  
      const res = await axiosPublic.post("/users", userInfo); // Await the Axios post request
      console.log(res.data, 'Data');
  
      const updated = {
        email: user.email,
        img: user.photoURL,
        date: new Date().toLocaleString(),
        role: 'user',
      };
      const updateResponse = await axiosPublic.put(`/user/${userInfo.email}`, updated); // Await the Axios put request
      console.log(updateResponse.data, 'Response data');
  
      navigate("/"); // Navigate after successful requests
    } catch (error) {
      console.error('Error during sign-in or API requests:', error);
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
  )
}

export default SocialLogin
