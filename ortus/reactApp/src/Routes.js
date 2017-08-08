import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './modules/Home/Home';
import GroupPage from './modules/GroupPage/GroupPage';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='grouppage' component={GroupPage} />
  </Route>
);