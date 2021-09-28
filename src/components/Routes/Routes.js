import React from 'react';
import { Switch, Redirect, Route } from "react-router-dom";
import Home from '../Home/Home';
import Series from '../Series/Series';
import Movies from '../Movies/Movies';
import styles from './Routes.module.scss';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/series" exact>
        <Series />
      </Route>
      <Route path="/movies" exact>
        <Movies />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
