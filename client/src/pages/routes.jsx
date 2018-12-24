import React from 'react';

import { MakeRouteWithSubRoutes } from 'utils/MakeRouteWithSubRoutes';
import { Route, Redirect, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import SearchPage from './SearchPage';

export const routesList = [
  {
    path: '/Home',
    component: HomePage,
    name: 'Home'
  },
  {
    path: '/Search',
    component: SearchPage,
    name: 'Search'
  },
];

export const Routes = (props) => {
  return (
      <Switch>
        <Route exact path="/">
          <Redirect to="/Home"></Redirect>
        </Route>
        {
          routesList.map(
            (route, index) => <MakeRouteWithSubRoutes key={index} {...route} />
          )
        }
      </Switch>
  );
};