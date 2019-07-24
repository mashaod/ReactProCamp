import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { withAppService } from '../../hoc';
import { fetchLiveFixtures } from '../../store/actions/fixturesActions';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import ErrorIndicator from '../errorIndicator';
import PreloaderCircular from '../preloaderCircular';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

class LiveFixtures extends Component {

    state = {
        fixtures: []
    }

    componentDidMount() {
        this.props.fetchLiveFixtures()
            .then((fixtures) => this.setState({ fixtures }));
    }

    showAllFixtures = () => {
        this.setState({ fixtures: this.props.liveFixtures })
    }

    showPLFixtures = () => {
        this.setState({ fixtures: this.props.liveFixturesPL })
    }

    render() {
        const { loading, error, classes } = this.props;
        const { fixtures } = this.state;

        if (loading) { return <PreloaderCircular />; }
        if (error) { return <ErrorIndicator />; }

        return (
            <div>
                <div>
                    <Button variant="contained" color="primary" onClick={this.showAllFixtures} className={classes.button}>
                        All
                    </Button>
                    <Button variant="contained" color="primary" onClick={this.showPLFixtures} className={classes.button}>
                        FA Premier League
                    </Button>
                </div>
                <div>
                    <List>
                    {
                        fixtures.map((fixture, index) => {
                            const { homeTeam, awayTeam, goalsHomeTeam, goalsAwayTeam } = fixture;
                            return (
                                <React.Fragment>
                                    <ListItem alignItems="flex-start" key={fixture.id}>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src={homeTeam.logo} className={classes.teamLogo}/>
                                        </ListItemAvatar>
                                        <Box m={0} display="flex" flexDirection="column" width={1}>
                                            <Typography
                                                component="p"
                                                color="textPrimary"
                                                variant="h6"
                                                align="center"
                                            >
                                                {goalsHomeTeam} : {goalsAwayTeam}
                                            </Typography>

                                            <Typography
                                                component="p"
                                                color="textPrimary"
                                                variant="body2"
                                                align="center"
                                            >
                                                { `${homeTeam.team_name} - ${awayTeam.team_name}` }
                                            </Typography>
                                        </Box>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src={awayTeam.logo} className={classes.teamLogo} />
                                        </ListItemAvatar>
                                    </ListItem>
                                    {
                                        fixtures.length !== index + 1 && <Divider variant="middle" component="li" />
                                    }
                                </React.Fragment>
                            )
                        })
                    }
                    </List>
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({ fixtureList: { liveFixtures, liveFixturesPL, isLiveFixturesloading: loading, liveFixturesError: error }}) => {
    return { liveFixtures, liveFixturesPL, loading, error };
};

const mapDispatchToProps = (dispatch, { appService }) => {
    return bindActionCreators({
        fetchLiveFixtures: fetchLiveFixtures(appService),
    }, dispatch);
};

LiveFixtures.propTypes = {
    liveFixtures: PropTypes.array.isRequired,
    liveFixturesPL: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

export default compose(
    withStyles(styles),
    withAppService(),
    connect(mapStateToProps, mapDispatchToProps)
)(LiveFixtures);