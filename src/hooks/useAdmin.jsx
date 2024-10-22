import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"; // Make sure the path to useAuth is correct
import useAxiosSecure from "./useAxiosSecure"; // Make sure the path to useAxiosSecure is correct

const useAdmin = () => {
  const { user, loading } = useAuth(); // useAuth must be properly defined and imported
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    enabled: !loading && !!user?.email, // Ensure user and email exist before querying
    queryFn: async () => {
      console.log("Checking if user is admin", user);
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log("Response data:", res.data);
      return res.data?.admin;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
