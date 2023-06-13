import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { Authcontext } from "../Provider/AuthProvider";

const useStudent = () => {
    const { currentUser, loading } = useContext(Authcontext)
    const [axiosSecure] = useAxiosSecure();
    
    const { data: isStudent, isLoading: isStudentLoading } = useQuery({
        queryKey: ["isStudent", currentUser?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/student/${currentUser.email}`);
            return res.data.student;
        }
    })
    return [isStudent, isStudentLoading]
};

export default useStudent;