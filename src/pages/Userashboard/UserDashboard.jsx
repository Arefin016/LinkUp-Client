import "aos/dist/aos.css";
import useAuth from "../../hooks/useAuth";
import "animate.css";

const UserDashboard = () => {
  
  const { user } = useAuth();
  console.log(user?.photoURL); // Check if photoURL is defined

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="p-6 bg-gray-100 min-h-screen"
    >
      <h2 className="text-3xl animate__rubberBand text-center items-center justify-center">
        <span className="md:text-5xl text-5xl mt-5 font-bold  text-[#0B3558] animate__rubberBand">
          Welcome to Our LinkUP!!!!!!
        </span>
      </h2>
      
      <div className="card card-side bg-base-100 shadow-xl mt-10 flex flex-col md:flex-row">
        <figure>
          {user?.photoURL ? (
            <img src={user.photoURL} alt="User Profile" className="w-32 h-32 rounded-full object-cover" />
          ) : (
            <img src="/path-to-placeholder-image.png" alt="Default User" className="w-32 h-32 rounded-full object-cover" />
          )}
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
