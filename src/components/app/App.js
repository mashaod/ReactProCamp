import React from 'react';
import { Router, Redirect, Switch, Route } from 'react-router-dom'
import history from '../../history';

import Header from '../header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { HomePage, TeamsPage, TeamPage, FixturesPage, NotFoundPage } from '../../pages';


function App() {
    return (
        <Router history={history}>
            <Header />
            <CssBaseline />
            <Container maxWidth="xl">
                <Switch>
                    <Redirect from="/odds" exact to="/teams" />

                    <Route path='/' exact component={HomePage}></Route>
                    <Route path='/teams' exact component={TeamsPage}></Route>
                    <Route path='/teams/:teamId' exact component={TeamPage}></Route>
                    <Route path='/fixtures' exact component={FixturesPage}></Route>
                    <Route component={NotFoundPage}></Route>
                </Switch>
            </Container>
        </Router>
    )
}

export default App;
