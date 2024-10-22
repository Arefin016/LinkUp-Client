import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useEvents = () => {
	const axiosPublic = useAxiosPublic();
	const {
		data: eventsData = [],
		isPending: loading,
		refetch,
	} = useQuery({
		queryKey: ["events"],
		queryFn: async () => {
			const res = await axiosPublic.get("/events");
			return res.data;
		},
	});
	return [eventsData, loading, refetch];
};

export default useEvents;
