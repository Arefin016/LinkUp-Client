import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"

const useEventDetails = () => {
  // tan stack query
  const axiosSecure = useAxiosSecure()
  const { data: eventDetails = [] } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosSecure.get("/events")
      console.log(res)
      return res.data()
    },
  })
  return [eventDetails]
}

export default useEventDetails
