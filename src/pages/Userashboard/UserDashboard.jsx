import "aos/dist/aos.css" // You can also use <link> for styles
import useAuth from "../../hooks/useAuth"
import "animate.css"

const UserDashboard = () => {
  const { user } = useAuth()

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="p-6 min-h-screen"
    >
      <h2 className="text-3xl animate__rubberBand text-center items-center justify-center">
        <span className="md:text-5xl text-5xl mt-5 font-bold  text-[#0B3558] animate__rubberBand">
          Welcome to Our LinkUP!!!!!!
        </span>{" "}
      </h2>
      <div className="card card-side bg-base-100 shadow-2xl mt-10 flex flex-col md:flex-row">
        <figure>
          <img src={user?.photoURL} alt="No Image" />
        </figure>
        
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">
            Name: {user?.displayName}
          </h2>
          <p className="text-2xl font-medium mt-5">Email: {user?.email}</p>
          <p className="text-2xl font-medium">
            Phone Number: {user?.phoneNumber ? user.phoneNumber : "Not Provided"}
          </p>
          <div className="card-actions">
            <button className="btn btn-accent">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
