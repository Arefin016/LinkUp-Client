import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import { FaTrashAlt, FaUsers } from "react-icons/fa"
import Swal from "sweetalert2"
import { useLoaderData } from "react-router-dom"
import "./AllUser.css"
import { useState } from "react"

const AllUsers = () => {
  const axiosSecure = useAxiosSecure()

  const { count } = useLoaderData()
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(0)
  console.log(count)
  const numberOfPage = Math.ceil(count / itemsPerPage)

  const pages = [...Array(numberOfPage).keys()]

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users?page=${currentPage}&size=${itemsPerPage}`
      )
      return res.data
    },
  })

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            })
          }
        })
      }
    })
  }

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data)
      if (res.data.modifiedCount > 0) {
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an admin!`,
          showConfirmButton: false,
          timer: 1500,
        })
      }
    })
  }

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
    <div>
      <div className="mx-auto p-4">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Manage All Users
        </h2>
        <h2 className="text-2xl font-bold uppercase">
          Total Users: {users.length}
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-md bg-blue-600"
                    >
                      <FaUsers className="text-white text-xl"></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost btn-md"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default AllUsers
