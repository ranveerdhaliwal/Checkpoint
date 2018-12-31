import React from 'react';

import { MakeRouteWithSubRoutes } from 'utils/MakeRouteWithSubRoutes';
import { Route, Redirect, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import SearchPage from './SearchPage';
import CollectionPage from './CollectionPage';

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
  {
    path: '/Collection',
    component: CollectionPage,
    name: 'Collection'
  },
];

export const Routes = (props) => {
  return (
      <Switch>
        <Route exact path="/">
          <Redirect to="/Search"></Redirect>
        </Route>
        {
          routesList.map(
            (route, index) => <MakeRouteWithSubRoutes key={index} {...route} />
          )
        }
      </Switch>
  );
};