import { Navigate, useLocation } from "react-router-dom"
import useAdmin from "../hooks/useAdmin"
import useAuth from "../hooks/useAuth"

const AdminRoute = ({ children }) => {
  // Correctly destructuring children
  const { user, loading } = useAuth() // Assuming useAuth returns an array
  const [isAdmin, isAdminLoading] = useAdmin() // Assuming useAdmin returns an array
  const location = useLocation()

  if (loading || isAdminLoading) {
    return <span className="loading loading-ring loading-lg"></span>
  }

  if (user && isAdmin) {
    return children
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />
}

export default AdminRoute
