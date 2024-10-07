import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../hooks/useAxiosSecure"

const AllUsers = () => {
  const axiosSecure = useAxiosSecure()
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users")
      return res.data
    },
  })
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
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllUsers
