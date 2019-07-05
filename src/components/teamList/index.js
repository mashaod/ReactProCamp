import React, { Component } from 'react';
import { withAppService } from '../../hoc';

import ErrorIndicator from '../errorIndicator';
import PreloaderCircular from '../preloaderCircular';
import TeamTile from './components/TeamTile';
import Grid from '@material-ui/core/Grid';

class TeamList extends Component {
    _isMounted = false;

    state = {
        teams: [],
        loading: true,
        error: false
    };

    componentDidMount() {
        this._isMounted = true;

        this.props.appService.getTeams()
            .then(({ teams }) => {
            this.setState({
                teams,
                loading: false
            })
            })
            .catch((err) => this.setState({ 
                error: true, 
                loading: false 
            }))
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { teams, loading, error } = this.state;

        if (loading) { return <PreloaderCircular />; }
        if (error) { return <ErrorIndicator />; }

        return (
            <Grid container justify="center">
                {teams.map((team) => (
                    <Grid key={team.team_id} item xs={3} align="center">
                        <TeamTile team={team}/>
                    </Grid>
                ))}
            </Grid>
        )
    }
}

export default withAppService(TeamList);
