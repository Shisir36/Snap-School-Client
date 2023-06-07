import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../Provider/AuthProvider';
// import { ColorRing } from 'react-loader-spinner'

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useContext(Authcontext)
    const location = useLocation();
    // console.log('user in private route',user);
    const from = location.state?.from?.pathname || "/";
    if (loading) {
        return <div className='mx-auto text-center h-screen flex items-center justify-center'>
        </div>

    }
    if (currentUser) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace={true}></Navigate>
};

export default PrivateRoute;