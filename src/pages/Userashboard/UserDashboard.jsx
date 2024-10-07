// import React, { useEffect, useState } from "react"
// import useAxiosUsers from "../../hooks/useAxiosUsers" // Assuming this hook provides an Axios instance
import "aos/dist/aos.css" // You can also use <link> for styles
import useAuth from "../../hooks/useAuth"
import "animate.css"

const UserDashboard = () => {
  const { user } = useAuth()
  // ------------------*******--------------------------
  /**
   * This is Arefin Has done
   *
   *
   *
   */

  // ------------------**********---------------------

  // const axiosUser = useAxiosUsers() // Axios instance from custom hook
  // const [loading, setLoading] = useState(true)
  // const [users, setUsers] = useState([])
  // const [error, setError] = useState(null) // For error handling

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const res = await axiosUser.get("/users")
  //       setUsers(res.data)
  //       setLoading(false) // Stop loading after data is fetched
  //     } catch (error) {
  //       console.error("Error fetching users:", error)
  //       setError("Failed to fetch users")
  //       setLoading(false) // Stop loading in case of error
  //     }
  //   }

  //   fetchUsers()
  // }, [axiosUser]) // axiosUser is now used instead of axiosPublic

  // if (loading) {
  //   return <p>Loading users...</p>
  // }

  // if (error) {
  //   return <p>{error}</p>
  // }

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="p-6 bg-gray-100 min-h-screen"
    >
      {/* -------------------*************************----------------
        
        This is part has been complete Arefin
        
        
        */}

      {/* // <h1 className="text-3xl font-bold mb-4">User Dashboard</h1> */}
      {/* //{" "} */}
      {/* {users.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user.id} className="p-4 bg-white rounded shadow-md">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p>
                <strong>Email:</strong> {user.email}
              </p>

              {/* Add more user information as needed */}
      {/* </div> */}
      {/* ))} */}
      {/* </div> */}
      {/* ) : ( */}
      {/* <p>No users found.</p> */}
      {/* )} */}
      <h2 className="text-3xl animate__rubberBand text-center items-center justify-center">
        <span className="md:text-5xl text-5xl mt-5 font-bold  text-[#0B3558] animate__rubberBand">
          Welcome to Our LinkUP!!!!!!
          {/* {user?.displayName ? user.displayName : "Back"} */}
        </span>{" "}
      </h2>
      <div className="card card-side bg-base-100 shadow-xl mt-10 flex flex-col md:flex-row">
        <figure>
          <img src={user?.photoURL} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">
            Name: {user?.displayName}
          </h2>
          <p className="text-2xl font-medium mt-5">Email: {user?.email}</p>
          <p className="text-2xl font-medium">
            Phone Number:{" "}
            {user?.phoneNumber ? user.phoneNumber : "Not Provided"}
          </p>
          <div className="card-actions">
            <button className="btn btn-accent">Update</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard
