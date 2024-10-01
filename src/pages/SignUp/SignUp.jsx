import { Link, useNavigate } from "react-router-dom"

import SignIn from "../../../public/SignIn.json"
import Lottie from "lottie-react"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import Swal from "sweetalert2"
import SocialLogin from "../../components/SocialLogin/SocialLogin"
import useAxiosPublic from "../../hooks/useAxiosPublic"

const SignUp = () => {
  const axiosPublic = useAxiosPublic()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const { createUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user
      console.log(loggedUser)
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // crete user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
            img:data.photoURL,
           date: new Date().toLocaleString(),
           role:'user',

          }
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database")
              reset()
              Swal.fire({
                position: "top",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500,
              })
              navigate("/")
            }
          })
        })
        .catch((error) => console.log(error))
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <Lottie animationData={SignIn}></Lottie>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-3xl text-center font-bold">
              Sign Up To Link Up
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                {...register("name", { required: true })}
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="name"
                {...register("photoURL", { required: true })}
                placeholder="Your Name"
                name="photoURL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600">photoURL is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Your Email"
                name="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  maxLength: 20,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="Your Password"
                name="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-600">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600">
                  Password must be 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600">
                  Password must be less than 20 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600">
                  Password must have one uppercase, one lowercase, one number
                  and one special characters
                </span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
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
            Already registered? Go to{" "}
            <Link className="text-blue-600 font-bold" to="/login">
              LOGIN
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  )
}

export default SignUp
