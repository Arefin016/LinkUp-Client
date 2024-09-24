import Lottie from "lottie-react"
import { Link } from "react-router-dom"
import SignUp from "../../../public/SignIn.json"

const SignIn = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <Lottie animationData={SignUp}></Lottie>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <h1 className="text-3xl text-center font-bold">
              Sign In To Link Up
            </h1>
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
                <span className="label-text">Password</span>
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
                value="Sign In"
                className="btn btn-primary"
              />
            </div>
          </form>
          <p className="mb-4 text-center">
            Please register at first. Go to{" "}
            <Link className="text-blue-600 font-bold" to="/signUp">
              SIGN UP
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn
