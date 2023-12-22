import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Weather } from '../ui/pages';

export const PublicRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/">
      <Weather />
    </Route>
  </Switch>
);
