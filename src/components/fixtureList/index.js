import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { withAppService } from '../../hoc';
import { fetchFixtures, fetchFixture } from '../../actions';

import ErrorIndicator from '../errorIndicator';
import PreloaderCircular from '../preloaderCircular';
import FixtureDetailsDialog from '../dialogs/fixtureDetails';

import { FixturesTableHeader } from './components';

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
        const { fixtureList, listLoading, listError } = this.props;
        const { currentFixture, isOpenFixtureDialog, rowsPerPage, page } = this.state;

        if (listLoading) { return <PreloaderCircular />; }
        if (listError) { return <ErrorIndicator />; }

        return (
            <React.Fragment>
                <Paper style={{width: '100%'}}>
                    <Table>
                        <FixturesTableHeader />
                        <TableBody>
                            {fixtureList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map(({ fixture_id, homeTeam, awayTeam, goalsHomeTeam, goalsAwayTeam, event_date, status }, index, array) => (
                                <TableRow key={fixture_id}>
                                    <TableCell align="right">
                                        <Link to={`/teams/${homeTeam.team_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            {homeTeam.team_name}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Link to={`/teams/${homeTeam.team_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <img src={homeTeam.logo} height="45px" alt={`logo_${homeTeam.team_name}`}/>
                                        </Link>
                                    </TableCell>
                                    <TableCell align="center">{goalsHomeTeam} : {goalsAwayTeam}</TableCell>
                                    <TableCell align="left">
                                        <Link to={`/teams/${awayTeam.team_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <img src={awayTeam.logo} height="45px" alt={`logo_${awayTeam.team_name}`}/>
                                        </Link>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Link to={`/teams/${awayTeam.team_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            {awayTeam.team_name}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="right">{this.getDate(event_date)}</TableCell>
                                    <TableCell align="left">{status}</TableCell>
                                    <TableCell align="center">
                                        <Info color="primary" style={{ cursor: 'pointer'}} onClick={() => this.openFixtureDetails(array[index])} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={fixtureList.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        backIconButtonProps={{'aria-label': 'Previous Page'}}
                        nextIconButtonProps={{'aria-label': 'Next Page'}}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                </Paper>
                <FixtureDetailsDialog
                    open={isOpenFixtureDialog}
                    handleClose={this.handleClose}
                    fixture={currentFixture}
                />
            </React.Fragment>
          );
    }
}

const mapStateToProps = ({ fixtureList: { fixtures: fixtureList, loading: listLoading, error: listError }}) => {
    return { fixtureList, listLoading, listError };
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
