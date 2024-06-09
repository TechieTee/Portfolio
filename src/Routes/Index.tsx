import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './allRoutes';
import Layout from 'Layout';
import NonAuthLayout from "Layout/NonLayout"
import AuthProtected from './AuthProtected';

const RouteIndex = () => {
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route: any, idx: number) => (
          <Route
            path={route.path}
            key={idx}
            element={
              <NonAuthLayout>
                <route.component />
              </NonAuthLayout>
            } />
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default RouteIndex;
