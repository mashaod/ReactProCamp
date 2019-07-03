import React from 'react';
import { Router, Redirect, Switch, Route } from 'react-router-dom'
import history from './history';

import Header from './components/header';
import { TeamsPage, NotFoundPage } from './pages';


function App() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Redirect from="/" exact to="/teams" />
        <Redirect from="/fixtures" exact to="/teams" />
        <Redirect from="/odds" exact to="/teams" />
        
        <Route path='/teams' exact component={TeamsPage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </Router>
  )
}

export default App;
