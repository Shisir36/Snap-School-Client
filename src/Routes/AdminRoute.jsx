import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";



const AdminRoute = ({ children }) => {
    const { currentUser, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (currentUser && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;