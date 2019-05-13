import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import Home from './components/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
