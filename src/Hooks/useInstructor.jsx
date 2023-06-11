import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
    const { currentUser } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isInstructor, isLoading: isIsntructorLoading } = useQuery({
        queryKey: ['isInstructor', currentUser?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${currentUser?.email}`);
            console.log('is admin response', res)
            return res.data.instructor;
        }
    })
    return [isInstructor, isIsntructorLoading]
}
export default useInstructor;