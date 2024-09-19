import { Link, useNavigate } from "react-router-dom"
import img from "../../../src/assets/login.svg"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const SignUp = () => {
  const { createuser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSignUp = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    console.log(name, email, password)

    createuser(email, password)
      .then((result) => {
        const user = result.user
        console.log("created user", user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary"
              />
            </div>
          </form>
          <p className="my-4 text-center">
            Already Have An Account?{" "}
            <Link className="text-orange-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp

// import { useRef, useState } from "react"
// import { Helmet } from "react-helmet"
// import { useForm } from "react-hook-form"
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
// import { Link } from "react-router-dom"
// const SignUp = () => {
//   const imageRef = useRef(null)
//   const [showPassword, setShowPassword] = useState(false)
//   const [image, setImage] = useState("")
//   // React hook form
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm()

//   const onSubmit = (data) => {
//     console.log(data)
//   }

//   // const handleImageClick = () => {
//   //   imageRef.current.click()
//   // }

//   return (
//     <div className="min-h-screen bg-base-200 mb-10">
//       <Helmet>
//         <title>SignUp</title>
//       </Helmet>
//       <div className="border-black border rounded-md">
//         <div className="text-center md:p-3 lg:p-10 my-5 md:text-3xl text-xl font-semibold lg:text-5xl md:font-semibold lg:font-extrabold">
//           <p>Please Sign Up</p>
//         </div>
//         <div className=" flex items-center border-black border rounded-md m-3">
//           <div className="w-[600px] hidden md:block border-black border rounded-md m-3">
//             <img
//               src="/public/pngtree-signing-up-for-a-course-isolated-cartoon-vector-illustrations-picture-image_8710389.png"
//               alt=""
//             />
//           </div>
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="mx-auto border-black border rounded-md m-3"
//           >
//             {/* <div> */}
//             <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
//               <form className="card-body">
//                 <div className="form-control">
//                   <div
//                     // onClick={handleImageClick}
//                     className="items-center text-center"
//                   >
//                     <label
//                       htmlFor="my_modal_8"
//                       className="bg-transparent border-none shadow-none"
//                     >
//                       <img
//                         className="w-20 h-20 mx-auto border-2 rounded-full border-green-500"
//                         src="/public/profile-icon-design-free-vector.jpg"
//                         alt="Profile Icon"
//                       />
//                       <input className="hidden" type="file" ref={imageRef} />
//                       <p>Image Select</p>
//                     </label>
//                   </div>
//                 </div>
//                 <div className="form-control border-b-2">
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     {...register("name")}
//                     name="name"
//                     className="input focus:outline-none"
//                     required
//                   />
//                 </div>

//                 <div className="form-control border-b-2">
//                   <input
//                     type="email"
//                     name="email"
//                     {...register("email")}
//                     placeholder="Email"
//                     className="input focus:outline-none"
//                     required
//                   />
//                 </div>
//                 <div className="form-control"></div>
//                 <div className="form-control border-b-2">
//                   <div className="relative">
//                     <input
//                       className="input focus:outline-none w-full py-2 px-4"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Enter Your Password"
//                       name="password"
//                       {...register("password")}
//                       required
//                     />
//                     <span
//                       className="absolute top-4 right-2 cursor-pointer"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="form-control mt-6">
//                   <button className="btn btn-primary">Sign Up</button>
//                 </div>
//               </form>

//               <div className="grid grid-cols-3 items-center">
//                 <span className="ml-3 text-black">
//                   <hr className="border border-black" />
//                 </span>

//                 <span className="text-center">OR</span>
//                 <span className="mr-3 text-black">
//                   <hr className="border border-black" />
//                 </span>
//               </div>
//               <div className="text-center pb-5">
//                 <p>
//                   Already have an account?{" "}
//                   <Link className="font-bold text-blue-600" to="/login">
//                     Log In
//                   </Link>
//                 </p>
//               </div>
//             </div>
//             {/* </div> */}
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SignUp
