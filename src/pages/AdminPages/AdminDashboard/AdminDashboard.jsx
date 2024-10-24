import React, { useState } from "react"
import { FaUsers } from "react-icons/fa6"
import { CiBookmark, CiBookmarkCheck, CiBookmarkRemove } from "react-icons/ci"
import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import "./AdminDashboard"
import { useLoaderData } from "react-router-dom"

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure()
  const { count } = useLoaderData()
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(0)
  console.log(count)
  const numberOfPage = Math.ceil(count / itemsPerPage)

  const pages = [...Array(numberOfPage).keys()]

  const { data: users = [] } = useQuery({
    queryKey: ["users", currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users?page=${currentPage}&size=${itemsPerPage}`
      )
      return res.data
    },
  })

  // handleItemsPerPage
  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value)
    console.log(val)
    setItemsPerPage(val)
    setCurrentPage(0)
  }

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

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
      {/* This is the pagination section */}
      <div className="pagination mt-5">
        <p className="mb-3">Current Page: {currentPage}</p>
        <button onClick={handlePrevPage} className="btn">
          Prev
        </button>
        {pages.map((page) => (
          <button
            className={currentPage === page && "selected btn"}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage} className="btn">
          Next
        </button>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          name=""
          id=""
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
    </div>
  )
}

export default AdminDashboard
