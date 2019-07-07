import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withAppService } from '../../hoc';

import ErrorIndicator from '../errorIndicator';
import PreloaderCircular from '../preloaderCircular';
import Box from '@material-ui/core/Box';

class TeamCard extends Component {
    _isMounted = false;

    static propTypes = {
        match: PropTypes.object.isRequired
    };

    state = {
        team: [],
        loading: true,
        error: false,
        message: null
    };

    componentDidMount() {
    this._isMounted = true;

    const { teamId } = this.props.match.params;

    this.props.appService.getTeamById(teamId)
      .then(({ teams=[] }) => {
        
        const message = teams.length > 0 ? null : 'Team does not exist';
        const newTeam = teams[0] || [];

        this.setState({
            team: newTeam,
            loading: false,
            message
        })

      })
      .catch((error) => this.setState({
        error: true,
        loading: false 
      }))
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { team, loading, error, message } = this.state;

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

export default withAppService(TeamCard);

