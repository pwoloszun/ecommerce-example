import React from 'react';
import { Route } from 'react-router-dom';

import { RouteInfo } from './types/RouteInfo';
import adminRoutes from './routes/adminRoutes';
import loggedUserRoutes from './routes/loggedUserRoutes';
import publicRoutes from './routes/publicRoutes';

export function routesForModule(moduleRoutes: RouteInfo[]): JSX.Element[] {
  return moduleRoutes.map((route) => {
    return (
      <Route
        key={route.path}
        exact={route.exact}
        path={route.path}
        component={route.main}
      />
    );
  });
}

const appRouting = [
  ...publicRoutes,
  ...loggedUserRoutes,
  ...adminRoutes,
];

export default appRouting;
