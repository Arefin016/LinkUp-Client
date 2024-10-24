import React from "react"
import { FaUsers } from "react-icons/fa6"
import { CiBookmark, CiBookmarkCheck, CiBookmarkRemove } from "react-icons/ci"
import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../hooks/useAxiosSecure"

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure()

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users")
      return res.data
    },
  })

  return (
    <div className="ml-4 md:ml-8">
      <p className="my-3 font-semibold text-xl md:text-2xl">Admin Dashboard</p>
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
      {/* Recently Visited Clients */}
      <div className="mt-8">
        <p className="my-3 font-semibold text-xl md:text-2xl">
          Recently Visited Clients: {users.length}
        </p>
        {/* This is table */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
