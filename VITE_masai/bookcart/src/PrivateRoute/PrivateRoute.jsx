import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../ContextAPI/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isLogged } = useContext(AuthContext);
  
  if (!isLogged) {
    return <Navigate to="/" replace />;
  } 
  return children;
};

export default PrivateRoute;