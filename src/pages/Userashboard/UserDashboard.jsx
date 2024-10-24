import { useState } from "react"
import "aos/dist/aos.css"
import "animate.css"
import useAuth from "../../hooks/useAuth"

const UserDashboard = () => {
  const { user } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [displayName, setDisplayName] = useState(user?.displayName || "")
  const [email, setEmail] = useState(user?.email || "")
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "")

  const handleUpdateClick = () => {
    setIsModalOpen(true)
  }

  const handleUpdate = async () => {
    try {
      console.log("Updated Info:", {
        displayName,
        email,
        phoneNumber,
      })
      // Close modal after updating
      setIsModalOpen(false)
    } catch (error) {
      console.error("Error updating profile:", error)
    }
  }

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="p-6 min-h-screen"
    >
      <h2 className="text-3xl animate__rubberBand text-center items-center justify-center">
        <span className="md:text-5xl text-5xl mt-5 font-bold text-[#0B3558] animate__rubberBand">
          Welcome to Our LinkUP!!!!!!
        </span>
      </h2>

      <div className="card card-side bg-base-100 shadow-2xl mt-10 flex flex-col md:flex-row">
        <figure>
          <img src={user?.photoURL} alt="User Avatar" />
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
            <button className="btn btn-accent" onClick={handleUpdateClick}>
              Update
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Updating Profile */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="modal-box bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
            <h3 className="font-bold text-lg">Update Profile</h3>

            <div className="form-control mt-4">
              <label className="label">Name</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control mt-4">
              <label className="label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control mt-4">
              <label className="label">Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>

            <div className="modal-action mt-5 flex justify-end space-x-3">
              <button className="btn btn-accent" onClick={handleUpdate}>
                Save
              </button>
              <button
                className="btn btn-outline"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserDashboard
