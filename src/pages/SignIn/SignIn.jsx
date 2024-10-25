import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SignUp from "../../../public/SignIn.json";
import { useContext, useState } from "react"; // Add useState here
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top",
          icon: "success",
          title: "User Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Login error:", error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 dark:bg-gray-900 transition-colors duration-300">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <Lottie animationData={SignUp}></Lottie>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:bg-gray-800 transition-colors duration-300">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl text-center font-bold text-gray-800 dark:text-gray-100">
              Sign In To Link Up
            </h1>
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-200">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="input input-bordered bg-white dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600"
                required
              />
            </div>

            {/* Password Input with Show Password feature */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-200">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Your Password"
                  name="password"
                  className="input input-bordered w-full bg-white dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600"
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 text-gray-500 dark:text-gray-300"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign In"
                className="btn btn-primary dark:bg-purple-600 dark:hover:bg-purple-700 dark:text-white"
              />
            </div>
          </form>

          <p className="mb-4 text-center text-gray-600 dark:text-gray-400">
            Please register at first. Go to{" "}
            <Link className="text-blue-600 dark:text-blue-400 font-bold" to="/signUp">
              SIGN UP
            </Link>
          </p>

          {/* Social Login Component */}
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
