import React, { Component } from 'react';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { withAppService } from '../../hoc';
import { fetchFixtures } from '../../actions';

import ErrorIndicator from '../errorIndicator';
import PreloaderCircular from '../preloaderCircular';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class FixtureList extends Component {

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

    render() {
        const { fixtures, loading, error } = this.props;

        if (loading) { return <PreloaderCircular />; }
        if (error) { return <ErrorIndicator />; }

        return (
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fixtures.map(({ fixture_id, homeTeam, awayTeam, goalsHomeTeam, goalsAwayTeam, event_date, status }) => (
                    <TableRow key={fixture_id}>
                      <TableCell align="right">{homeTeam.team_name}</TableCell>
                      <TableCell align="right"><img src={homeTeam.logo} height="45px" alt={`logo_${homeTeam.team_name}`}/></TableCell>
                      <TableCell align="center">{goalsHomeTeam} : {goalsAwayTeam}</TableCell>
                      <TableCell align="left"><img src={awayTeam.logo} height="45px" alt={`logo_${awayTeam.team_name}`}/></TableCell>
                      <TableCell align="left">{awayTeam.team_name}</TableCell>
                      <TableCell align="right">{this.getDate(event_date)}</TableCell>
                      <TableCell align="left">{status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
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
