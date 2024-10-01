import Lottie from "lottie-react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import SignUp from "../../../public/SignIn.json"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import Swal from "sweetalert2"
import SocialLogin from "../../components/SocialLogin/SocialLogin"
import useAxiosPublic from "../../hooks/useAxiosPublic"

const SignIn = () => {
  const axiosPublic = useAxiosPublic()
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || "/"

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  
    try {
      // Sign in the user with email and password
      const result = await signIn(email, password); // Await the signIn promise
      const user = result.user;
      console.log(user);
  
      // Prepare the updated user object
      const updated = {
        email: user.email,
        img: user.photoURL,
        date: new Date().toLocaleString(),
        role: 'user',
      };
  
      // Update the user in your database
      const res = await axiosPublic.put(`/user/${user.email}`, updated); // Await the Axios request
      console.log(res.data, 'Response data');
  
      // Show success alert
      Swal.fire({
        position: "top",
        icon: "success",
        title: "User Login Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
  
      // Navigate the user to the desired location
      navigate(from, { replace: true });
      
    } catch (error) {
      // Handle errors if any step fails
      console.error('An error occurred:', error);
    }
  };
  

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <Lottie animationData={SignUp}></Lottie>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
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
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  )
}

export default SignIn
