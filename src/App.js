import React from 'react';
import { Router, Redirect, Switch, Route } from 'react-router-dom'
import history from './history';

import Header from './components/header';
import Container from '@material-ui/core/Container';
import { TeamsPage, TeamPage, NotFoundPage } from './pages';


function App() {
    return (
        <Router history={history}>
            <Header />
            <Container>
                <Switch>
                    <Redirect from="/" exact to="/teams" />
                    <Redirect from="/fixtures" exact to="/teams" />
                    <Redirect from="/odds" exact to="/teams" />

                    <Route path='/teams' exact component={TeamsPage}></Route>
                    <Route path='/teams/:teamId' exact component={TeamPage}></Route>
                    <Route component={NotFoundPage}></Route>
                </Switch>
            </Container>
        </Router>
    )
}

export default App;
