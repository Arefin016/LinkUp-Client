import React, { useEffect, useState } from "react"
import useAxiosUsers from "../../hooks/useAxiosUsers" // Assuming this hook provides an Axios instance

const UserDashboard = () => {
  const axiosUser = useAxiosUsers() // Axios instance from custom hook
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null) // For error handling

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axiosUser.get("/users")
        setUsers(res.data)
        setLoading(false) // Stop loading after data is fetched
      } catch (error) {
        console.error("Error fetching users:", error)
        setError("Failed to fetch users")
        setLoading(false) // Stop loading in case of error
      }
    }

    fetchUsers()
  }, [axiosUser]) // axiosUser is now used instead of axiosPublic

  if (loading) {
    return <p>Loading users...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
      {users.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user.id} className="p-4 bg-white rounded shadow-md">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p>
                <strong>Email:</strong> {user.email}
              </p>

              {/* Add more user information as needed */}
            </div>
          ))}
        </div>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  )
}

export default UserDashboard
