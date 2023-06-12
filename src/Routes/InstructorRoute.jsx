import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../Hooks/useInstructor";
import { Authcontext } from "../Provider/AuthProvider";



const InstructorRoute = ({ children }) => {

    const { user, loading } = useContext(Authcontext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <div className="flex justify-center items-center mt-56">
            <span className="loading loading-bars loading-lg "></span>
        </div>
    }
    if (user && isInstructor) {
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;