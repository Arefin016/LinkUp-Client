import React, { useEffect, useState } from "react"
import { FaUsers } from "react-icons/fa6"
import { CiBookmark, CiBookmarkCheck, CiBookmarkRemove } from "react-icons/ci"
import useAxiosUsers from "../../hooks/useAxiosUsers" // Import your axios hook

const Dashboard = () => {
  const axiosPublic = useAxiosUsers()
  const [users, setUsers] = useState([])

  
  return (
    <div className="ml-4 md:ml-8">
      <p className="my-3 font-semibold text-xl md:text-2xl">Dashboard</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-orange-600 p-5 text-white rounded-lg flex flex-col justify-center items-center">
          <div className="text-xl font-semibold flex gap-5">
            <h3>CLIENTS</h3>
            <span className="text-2xl">
              <FaUsers />
            </span>
          </div>
          <p className="font-bold text-2xl">123K+</p>
        </div>
        <div className="bg-orange-600 p-5 text-white rounded-lg flex flex-col justify-center items-center">
          <div className="text-xl font-semibold flex gap-5">
            <h3>Total Booking</h3>
            <span className="text-2xl">
              <CiBookmark />
            </span>
          </div>
          <p className="font-bold text-2xl">5436+</p>
        </div>
        <div className="bg-orange-600 p-5 text-white rounded-lg flex flex-col justify-center items-center">
          <div className="text-xl font-semibold flex gap-5">
            <h3>BOOKING CANCEL</h3>
            <span className="text-2xl">
              <CiBookmarkRemove />
            </span>
          </div>
          <p className="font-bold text-2xl">434+</p>
        </div>
        <div className="bg-orange-600 p-5 text-white rounded-lg flex flex-col justify-center items-center">
          <div className="text-xl font-semibold flex gap-5">
            <h3>COMPLETE MEETING</h3>
            <span className="text-2xl">
              <CiBookmarkCheck />
            </span>
          </div>
          <p className="font-bold text-2xl">434+</p>
        </div>
      </div>

      <div className="mt-8">
        <p className="my-3 font-semibold text-xl md:text-2xl">
          Recently Visited Clients
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {users.map((user) => (
            <div key={user._id} className="bg-white rounded-lg p-5 shadow-md">
              <div className="rounded-full overflow-hidden w-24 h-24 mx-auto mb-4">
                <img
                  src={user.photoURL ? user.photoURL : "/path-to-placeholder-image.png"}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500 mb-2 text-center">
                {user.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
