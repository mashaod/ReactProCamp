import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorIndicator from '../errorIndicator';
import PreloaderCircular from '../preloaderCircular';
import { withAppService } from '../../hoc';

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
      .then(({ teams }) => {
        const newTeam = teams[0] || [];

        this.setState({
            team: newTeam,
            loading: false
        })

      })
      .catch((error) => this.setState({
        error: true,
        message: error.message || null,
        loading: false 
      }))
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { team, loading, error, message } = this.state;

        if (loading) { return <PreloaderCircular />; }
        if (error) { return <ErrorIndicator message={message} />; }

        return (
            <div>
                <h1>{team.name}</h1>
                <p>{team.code}</p>
                <p>{team.country}</p>
                <p>{team.venue_city}</p>
                <p>{team.venue_address}</p>
                <p>{team.venue_capacity}</p>
                <p>{team.venue_surface}</p>
            </div>
        )
    }
}

export default withAppService(TeamCard);

