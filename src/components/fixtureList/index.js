import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { withAppService } from '../../hoc';
import { fetchFixtures } from '../../actions';

import ErrorIndicator from '../errorIndicator';
import PreloaderCircular from '../preloaderCircular';
import FixtureDetailsDialog from '../dialogs/fixtureDetails.dialog';

import { FixturesTableHeader } from './components';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Info from '@material-ui/icons/Info';
import TablePagination from '@material-ui/core/TablePagination';

class FixtureList extends Component {

    state = {
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

    openFixtureDetails = (fixtureId) => {
        this.setState({ isOpenFixtureDialog: true });
        //this.props.fetchFixture(fixtureId);
    }

    handleClose = () => {
        this.setState({ isOpenFixtureDialog: false });
    }

    handleChangePage = (event, newPage) => {
        this.setState({
            page: newPage 
        });
    }
    
    handleChangeRowsPerPage = (event) => {
        this.setState({
            rowsPerPage: +event.target.value,
            page: 0
        });
    }

    render() {
        const { fixtures, loading, error } = this.props;
        const { isOpenFixtureDialog, rowsPerPage, page } = this.state;

        if (loading) { return <PreloaderCircular />; }
        if (error) { return <ErrorIndicator />; }

        return (
            <React.Fragment>
                <Paper style={{width: '100%'}}>
                    <Table>
                        <FixturesTableHeader />
                        <TableBody>
                            {fixtures.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map(({ fixture_id, homeTeam, awayTeam, goalsHomeTeam, goalsAwayTeam, event_date, status }) => (
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
                                        <Info color="primary" style={{ cursor: 'pointer'}} onClick={() => this.openFixtureDetails(fixture_id)} />
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
                <FixtureDetailsDialog open={isOpenFixtureDialog} handleClose={this.handleClose}/>
            </React.Fragment>
          );
    }
}

const mapStateToProps = ({ fixtureList: { fixtures, loading, error }}) => {
    return { fixtures, loading, error };
};

const mapDispatchToProps = (dispatch, { appService }) => {
    return bindActionCreators({
        fetchFixtures: fetchFixtures(appService),
    }, dispatch);
};
  
export default compose(
    withAppService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FixtureList);
