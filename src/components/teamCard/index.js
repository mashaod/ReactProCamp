import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { withAppService } from '../../hoc';
import { fetchTeamById } from '../../actions';

import ErrorIndicator from '../errorIndicator';
import PreloaderCircular from '../preloaderCircular';
import Box from '@material-ui/core/Box';

class TeamCard extends Component {

    componentDidMount() {
        const { teamId } = this.props.match.params;
        this.props.fetchTeamById(teamId);
    }

    render() {
        const { team, loading, error, message } = this.props;

        if (loading) { return <PreloaderCircular />; }
        if (error || message !== null) { return <ErrorIndicator message={message} />; }

        return (
            <Box textAlign="center">
                <img src={team.logo} alt="team logo"></img>
                <h1>{team.name}</h1>
                <p>{team.code}</p>
                <p>Country: {team.country}</p>
                <p>Venue city: {team.venue_city}</p>
                <p>Venue address: {team.venue_address}</p>
                <p>Venue capacity: {team.venue_capacity}</p>
                <p>Venue surface: {team.venue_surface}</p>
            </Box>
        )
    }
}


const mapStateToProps = ({ teamCard: { team, loading, message, error }}) => {
    return { team, loading, message, error };
};

const mapDispatchToProps = (dispatch, { appService }) => {
    return bindActionCreators({
        fetchTeamById: fetchTeamById(appService),
    }, dispatch);
};

TeamCard.propTypes = {
    match: PropTypes.object.isRequired
};

export default compose(
    withAppService(),
    connect(mapStateToProps, mapDispatchToProps)
)(TeamCard);

