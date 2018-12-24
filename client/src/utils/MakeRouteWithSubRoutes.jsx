// from react router tutorial:
// https://medium.freecodecamp.org/hitchhikers-guide-to-react-router-v4-c98c39892399

import React from 'react';
import { Route } from 'react-router-dom';

export const MakeRouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component { ...props} routes={route.routes} />
      )}
    />
  );
}