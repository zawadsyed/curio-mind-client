import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContexts';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
}

export default PrivateRoutes;