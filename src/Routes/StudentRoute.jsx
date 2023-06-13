import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import useStudent from "../Hooks/useStudent";

const StudentRoute = ({ children }) => {
    const { currentUser, loading } = useAuth();
    const [isStudent, isStudentLoading] = useStudent();
    const location = useLocation();

    if (loading || isStudentLoading) {
        return <div className='mx-auto text-center h-screen flex items-center justify-center'>
        </div>
    }

    if (currentUser && isStudent) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default StudentRoute;