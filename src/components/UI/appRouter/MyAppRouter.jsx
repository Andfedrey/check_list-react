import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../../context';
import { privateRoutes, publicRoutes } from '../../../router';
import { MyLoader } from '../loading/MyLoader';

export const MyAppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <MyLoader />;
  }
  return (
    <div>
      {isAuth
        ? (
          <Routes>
            {privateRoutes.map((route) => (
              <Route
                path={route.path}
                element={<route.component />}
                key={route.path}
              />
            ))}
          </Routes>
        ) : (
          <Routes>
            {publicRoutes.map((route) => (
              <Route
                path={route.path}
                element={<route.component />}
                key={route.path}
              />
            ))}
          </Routes>
        )}
    </div>
  );
};
