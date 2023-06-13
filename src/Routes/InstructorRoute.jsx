import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";
import useInstructor from "../Hooks/useInstructor";



const InstructorRoute = ({ children }) => {

    const { currentUser, loading } = useContext(Authcontext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <div className="flex justify-center items-center mt-56">
            <span className="loading loading-bars loading-lg "></span>
        </div>
    }
    if (currentUser && isInstructor) {
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;