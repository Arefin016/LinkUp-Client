import { Link, useNavigate } from "react-router-dom";
import SignIn from "../../../public/SignIn.json";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const result = await createUser(data.email, data.password);
      const loggedUser = result.user;

      await Swal.fire({
        position: "top",
        icon: "success",
        title: "Registration Successful!",
        showConfirmButton: false,
        timer: 1500,
      });

      await updateUserProfile(data.name, data.photoURL);

      const userInfo = {
        name: data.name,
        email: data.email,
        photoURL: data.photoURL,
      };

      const res = await axiosPublic.post("/users", userInfo);

      if (res.data.insertedId) {
        reset();
        Swal.fire({
          position: "top",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This email is already in use!",
        });
      } else {
        console.error("Error during sign-up:", error);
      }
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200 dark:bg-gray-800 transition-colors duration-300">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <Lottie animationData={SignIn} />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white dark:bg-white transition-colors duration-300">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-3xl text-center font-bold text-gray-800 dark:text-gray-100">
              Sign Up To Link Up
            </h1>

            {/* Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-200">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="input input-bordered bg-white dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600"
              />
              {errors.name && <span className="text-red-600">Name is required</span>}
            </div>

            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-200">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Your Email"
                className="input input-bordered bg-white dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600"
              />
              {errors.email && <span className="text-red-600">Email is required</span>}
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-200">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Your Password"
                  className="input input-bordered w-full bg-white dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600"
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 text-gray-500 dark:text-gray-300"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {errors.password?.type === "required" && (
                <span className="text-red-600">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600">Password must be at least 6 characters</span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600">Password must be less than 20 characters</span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600">
                  Password must have one uppercase letter, one lowercase letter, one number, and one special character
                </span>
              )}
            </div>

            {/* Confirm Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-200">Confirm Password</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === password || "Passwords do not match",
                  })}
                  placeholder="Confirm Your Password"
                  className="input input-bordered w-full bg-white dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600"
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 text-gray-500 dark:text-gray-300"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="text-red-600">{errors.confirmPassword.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <input type="submit" value="Sign Up" className="btn btn-primary dark:bg-purple-600 dark:hover:bg-purple-700 dark:text-white" />
            </div>
          </form>

          <p className="my-4 text-center text-gray-600 dark:text-gray-400">
            Already registered? Go to{" "}
            <Link className="text-blue-600 dark:text-blue-400 font-bold" to="/login">
              LOGIN
            </Link>
          </p>

          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
