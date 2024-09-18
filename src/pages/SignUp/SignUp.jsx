import { useRef, useState } from "react"
import { Helmet } from "react-helmet"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { Link } from "react-router-dom"
const SignUp = () => {
  const imageRef = useRef(null)
  const [showPassword, setShowPassword] = useState(false)
  const [image, setImage] = useState("")

  const handleImageClick = () => {
    imageRef.current.click()
  }

  return (
    <div>
      <Helmet>
        <title>SignUp</title>
      </Helmet>
      <div className="mb-5">
        <div className="text-center md:p-3 lg:p-10 md:text-3xl text-xl font-semibold lg:text-5xl md:font-semibold lg:font-extrabold">
          <p>Please Sign Up</p>
        </div>
        <div className="">
          <div className="card shrink-0 lg:w-1/3 md:w-2/4 w-2/3 mx-auto shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <div
                  onClick={handleImageClick}
                  className="items-center text-center"
                >
                  <label
                    htmlFor="my_modal_8"
                    className="bg-transparent border-none shadow-none"
                  >
                    <img
                      className="w-20 h-20 mx-auto border-2 rounded-full border-green-500"
                      src="/public/profile-icon-design-free-vector.jpg"
                      alt="Profile Icon"
                    />
                    <input className="hidden" type="file" ref={imageRef} />
                    <p>Image Select</p>
                  </label>
                </div>

                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
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
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control"></div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    className="input input-bordered w-full py-2 px-4"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Your Password"
                    name="password"
                    required
                  />
                  <span
                    className="absolute top-4 right-2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </span>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>

            <div className="text-center pb-5">
              <p>
                Already have an account?{" "}
                <Link className="font-bold text-blue-600" to="/login">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
