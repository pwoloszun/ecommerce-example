import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import appRouting, { routesForModule } from 'src/application/routing/appRouting';
import PageNotFound from './PageNotFound';

const allRoutes = routesForModule(appRouting);

export default function MainContent(): React.ReactElement {
  return (
    <Switch>
      {allRoutes}
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
}
