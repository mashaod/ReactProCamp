import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import history from './history';

import Header from './components/header';
import { HomePage, NotFoundPage } from './pages';


function App() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </Router>
  )
}

export default App;
