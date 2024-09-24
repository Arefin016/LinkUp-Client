import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import SignIn from "../../../public/SignIn.json"
import Lottie from "lottie-react"

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
          <Lottie animationData={SignIn}></Lottie>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-3xl text-center font-bold">
              Sign Up To Link Up
            </h1>
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
            Already registered? Go to{" "}
            <Link className="text-blue-600 font-bold" to="/login">
              LOGIN
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
