import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './page/Main.js';
import Login from './page/Login.js';
import Page404 from './page/Page404.js';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" component={Login} />
      <Route render={Page404} />
    </Switch>
  );
};

export default App;
