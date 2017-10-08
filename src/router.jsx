import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Swipe from './containers/swipe.jsx';
import Matches from './containers/matches.jsx';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={ Swipe }/>
      <Route path='/matches' exact component={ Matches }/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
