// import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { Navigate, Outlet } from 'react-router-dom';

const SecureRoute = () => {
  const {user} = useSelector((state: RootState) => state.user);
  return (
    user ? <Outlet /> : <Navigate to='/signin' replace />
  );
}

export default SecureRoute;
