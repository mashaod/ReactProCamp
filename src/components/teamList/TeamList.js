import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { withAppService } from '../../hoc';
import { fetchTeams } from '../../store/actions/teams.actions';

import ErrorIndicator from '../errorIndicator';
import PreloaderCircular from '../preloaderCircular';
import TeamTile from './components/TeamTile';
import Grid from '@material-ui/core/Grid';

class TeamList extends Component {

    componentDidMount() {
        this.props.fetchTeams();
    }

    render() {
        const { teams, loading, error } = this.props;

        if (loading) { return <PreloaderCircular />; }
        if (error) { return <ErrorIndicator />; }

        return (
            <Grid container item xs={8} justify="center">
                {
                    teams.map((team) => (
                        <Grid key={team.team_id} item xs={3} align="center">
                            <TeamTile team={team}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    }
}

const mapStateToProps = ({ teamList: { teams, loading, error }}) => {
    return { teams, loading, error };
};

const mapDispatchToProps = (dispatch, { appService }) => {
    return bindActionCreators({
        fetchTeams: fetchTeams(appService),
    }, dispatch);
};

TeamList.propTypes = {
    teams: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

export default compose(
    withAppService(),
    connect(mapStateToProps, mapDispatchToProps)
)(TeamList);
