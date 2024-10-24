import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth"

const useEvents = () => {
  // tanstack query
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()
  const { data: event = [] } = useQuery({
    queryKey: ["event", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/events?email=${user.email}`)
      return res.data
    },
  })
  return [event]
}

export default useEvents