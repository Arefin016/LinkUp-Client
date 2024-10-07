// import { FcGoogle } from "react-icons/fc"
// import useAuth from "../../hooks/useAuth"
// import { useNavigate } from "react-router-dom"
// import useAxiosPublic from "../../hooks/useAxiosPublic"

// const SocialLogin = () => {
//   const { googleSignIn } = useAuth()
//   const axiosPublic = useAxiosPublic()
//   const navigate = useNavigate()

//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await googleSignIn()
//       const user = result.user

//       // Logging the user info to ensure it contains the expected data
//       console.log("Google User Info:", user)

//       const userInfo = {
//         email: user?.email,
//         name: user?.displayName,
//         // Include other fields if needed, like photoURL
//         photoURL: user?.photoURL,
//       }

//       // Log the user info being sent to the backend
//       console.log("Sending User Info to Backend:", userInfo)

//       const response = await axiosPublic.post("/users", userInfo)

//       // Log the response from the backend
//       console.log("Backend Response:", response.data)

//       // Navigate to the homepage upon success
//       navigate("/")
//     } catch (error) {
//       // Handle error and log it
//       console.error("Error during Google Sign-In or POST request:", error)
//       if (error.response) {
//         // If the server responds with an error status (like 400)
//         console.error("Backend Error:", error.response.data)
//       } else {
//         // General error handling
//         console.error("Error Details:", error.message)
//       }
//     }
//   }

//   return (
//     <div className="w-full">
//       <div className="divider w-[82%] ml-[34px]">OR</div>
//       <div className="w-full">
//         <button
//           onClick={handleGoogleSignIn}
//           className="btn btn-md w-[83%] ml-[32px] mb-5"
//         >
//           <FcGoogle className="" />
//           Google
//         </button>
//       </div>
//     </div>
//   )
// }

// export default SocialLogin

import { FcGoogle } from "react-icons/fc"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import useAxiosPublic from "../../hooks/useAxiosPublic"

const SocialLogin = () => {
  const { googleSignIn } = useAuth()
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user)
      const userInfo = {
        email: result?.user?.email,
        name: result?.user?.displayName,
      }
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data)
        navigate("/")
      })
    })
  }
  // const handleGoogleSignIn = async () => {
  //   try {
  //     // Perform Google sign-in
  //     const result = await googleSignIn()

  //     // Log the user object to inspect what data is returned
  //     console.log("Google User Data:", result.user)

  //     // Check if user data is available
  //     const userInfo = {
  //       email: result?.user?.email || "", // Ensure email exists
  //       name: result?.user?.displayName || "", // Ensure displayName exists
  //     }

  //     // Log the data being sent to the backend
  //     console.log("Sending User Info to Backend:", userInfo)

  //     // Check if required data is missing before making the POST request
  //     if (!userInfo.email || !userInfo.name) {
  //       throw new Error(
  //         "User data is incomplete. Please ensure both email and name are available."
  //       )
  //     }

  //     // Make the POST request to the backend to save user information
  //     const res = await axiosPublic.post("/users", userInfo)

  //     // Log the response from the backend
  //     console.log("Backend Response:", res.data)

  //     // Navigate to home or dashboard on successful sign-in
  //     navigate("/")
  //   } catch (error) {
  //     // Log any errors that occur during sign-in or the POST request
  //     console.error("Error during Google Sign-In or POST request:", error)

  //     // Log specific backend error response if available
  //     if (error.response) {
  //       console.error("Backend Error Response:", error.response.data)
  //     } else {
  //       console.error("Error Details:", error.message)
  //     }
  //   }
  // }

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
