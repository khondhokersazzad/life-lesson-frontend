import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading, status, roleLoading } = useContext(AuthContext);
  
 
  // 1. Show loading if Firebase is checking auth 
  // OR if we are waiting for the database role/status
  if (loading || roleLoading) {
    return <Loading />;
  }

  
if (!user) {
  return <Navigate to="/auth/login"  />;
}

  
  return children;
};

export default PrivateRoute;