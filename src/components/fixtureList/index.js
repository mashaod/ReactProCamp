import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { withAppService } from '../../hoc';
import { fetchFixtures } from '../../actions';

import ErrorIndicator from '../errorIndicator';
import PreloaderCircular from '../preloaderCircular';
import FixtureDetailsDialog from '../dialogs/fixtureDetails.dialog';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MoreVert from '@material-ui/icons/MoreVert';

class FixtureList extends Component {

    state = {
        isOpenFixtureDialog: false
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

    render() {
        const { fixtures, loading, error } = this.props;
        const { isOpenFixtureDialog } = this.state;

        if (loading) { return <PreloaderCircular />; }
        if (error) { return <ErrorIndicator />; }

        return (
            <React.Fragment>
                <Paper>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell align="right">Home team</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="center">Score</TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left">AwayTeam</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {fixtures.map(({ fixture_id, homeTeam, awayTeam, goalsHomeTeam, goalsAwayTeam, event_date, status }) => (
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
                            <TableCell align="left">
                                <MoreVert color="primary" style={{ cursor: 'pointer'}} onClick={() => this.openFixtureDetails(fixture_id)} />
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
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
