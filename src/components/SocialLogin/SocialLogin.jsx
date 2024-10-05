import { FcGoogle } from "react-icons/fc"
import useAuth from "../../hooks/useAuth"
import useAxiosPublic from "../../hooks/useAxiosPublic"
import { useNavigate } from "react-router-dom"

const SocialLogin = () => {
  const { googleSignIn } = useAuth()
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user
        console.log("Google user:", user)

        const userInfo = {
          email: user?.email,
          name: user?.displayName,
        }

        // Post user data to the backend
        axiosPublic.post("/users", userInfo)
          .then((res) => {
            console.log("User posted:", res.data)
            // Navigate to home page after successful sign-in and user post
            navigate("/") 
          })
          .catch((error) => {
            console.error("Error posting user info:", error)
          })
      })
      .catch((error) => {
        console.error("Google Sign-In failed:", error)
      })
  }

  return (
    <div className="w-full">
      <div className="divider w-[82%] ml-[34px]">OR</div>
      <div className="w-full">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-md w-[83%] ml-[32px] mb-5 flex items-center gap-2"
        >
          <FcGoogle />
          Google
        </button>
      </div>
    </div>
  )
}

export default SocialLogin
