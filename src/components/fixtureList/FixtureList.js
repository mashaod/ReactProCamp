import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { withAppService } from '../../hoc';
import { fetchFixtures, fetchFixture } from '../../store/actions/fixtures.actions';

import ErrorIndicator from '../errorIndicator';
import PreloaderCircular from '../preloaderCircular';
import FixtureDetailsDialog from '../dialogs/fixtureDetails';

import { FixturesTableHeader } from './components';

import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Info from '@material-ui/icons/Info';
import TablePagination from '@material-ui/core/TablePagination';
import styles from './styles';
class FixtureList extends Component {

    state = {
        currentFixture: {},
        isOpenFixtureDialog: false,
        rowsPerPage: 5,
        page: 0
    }

    componentDidMount() {
        this.props.fetchFixtures();
    }

    getDate = (time) => {
        return  new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }).format(new Date(time))
    }

    openFixtureDetails = (fixture) => {
        this.setState({
            currentFixture: fixture,
            isOpenFixtureDialog: true
        });

        this.props.fetchFixture(fixture)
            .then(fixtureDetails => {
                this.setState({ currentFixture: fixtureDetails });
            })
            .catch(() => {
                this.setState({ isOpenFixtureDialog: false });
            });
    }

    handleClose = () => {
        this.setState({
            isOpenFixtureDialog: false,
            currentFixture: {}
        });
    }

    handleChangePage = (event, newPage) => {
        this.setState({ page: newPage });
    }

    handleChangeRowsPerPage = (event) => {
        this.setState({
            rowsPerPage: +event.target.value,
            page: 0
        });
    }

    render() {
        const { fixtures, loading, error, classes } = this.props;
        const { currentFixture, isOpenFixtureDialog, rowsPerPage, page } = this.state;

        if (loading) { return <PreloaderCircular />; }
        if (error) { return <ErrorIndicator />; }

        return (
            <React.Fragment>
                <Grid container item xs={8} justify="center">
                    <Paper className={classes.paper}>
                        <Table>
                            <FixturesTableHeader />
                            <TableBody>
                                {fixtures.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map(({ fixture_id, homeTeam, awayTeam, goalsHomeTeam, goalsAwayTeam, event_date, status }, index, array) => (
                                    <TableRow key={fixture_id}>
                                        <TableCell align="right" width="20%">
                                            <Link to={`/teams/${homeTeam.team_id}`} className={classes.cellLink}>
                                                {homeTeam.team_name}
                                            </Link>
                                        </TableCell>
                                        <TableCell align="right" width="10%">
                                            <Link to={`/teams/${homeTeam.team_id}`} className={classes.cellLink}>
                                                <img src={homeTeam.logo} className={classes.teamLogo} alt={`logo_${homeTeam.team_name}`}/>
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center">{goalsHomeTeam} : {goalsAwayTeam}</TableCell>
                                        <TableCell align="left" width="10%">
                                            <Link to={`/teams/${awayTeam.team_id}`} className={classes.cellLink}>
                                                <img src={awayTeam.logo} className={classes.teamLogo} alt={`logo_${awayTeam.team_name}`}/>
                                            </Link>
                                        </TableCell>
                                        <TableCell align="left" width="20%">
                                            <Link to={`/teams/${awayTeam.team_id}`} className={classes.cellLink}>
                                                {awayTeam.team_name}
                                            </Link>
                                        </TableCell>
                                        <TableCell align="right">{this.getDate(event_date)}</TableCell>
                                        <TableCell align="left">{status}</TableCell>
                                        <TableCell align="center">
                                            <Info color="primary" className={classes.cellIcon} onClick={() => this.openFixtureDetails(array[index])} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={fixtures.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            backIconButtonProps={{'aria-label': 'Previous Page'}}
                            nextIconButtonProps={{'aria-label': 'Next Page'}}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                        />
                    </Paper>
                </Grid>
                <FixtureDetailsDialog
                    open={isOpenFixtureDialog}
                    handleClose={this.handleClose}
                    fixture={currentFixture}
                />
            </React.Fragment>
          );
    }
}

const mapStateToProps = ({ fixtureList: { fixtures, isFixturesloading: loading, fixturesError: error }}) => {
    return { fixtures, loading, error };
};

const mapDispatchToProps = (dispatch, { appService }) => {
    return bindActionCreators({
        fetchFixtures: fetchFixtures(appService),
        fetchFixture: fetchFixture(appService)
    }, dispatch);
};

export default compose(
    withStyles(styles),
    withAppService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FixtureList);
