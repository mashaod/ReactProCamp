import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { withAppService } from '../../hoc';
import { fetchStandings } from '../../store/actions/standings.actions';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import ErrorIndicator from '../errorIndicator';
import PreloaderCircular from '../preloaderCircular';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

class Standings extends Component {

    state = {
        standings: []
    }

    componentDidMount() {
        this.props.fetchStandings()
            .then(() => this.setStandingsByFilter('premierLeague'))
    }

    setStandingsByFilter = (filter) => {
        const { premierLeague, championship, FAWSL } = this.props.standings;
        let standings = [];

        switch(filter) {
            case 'FAWSL':
                standings = [ ...FAWSL ];
                break;
            case 'championship':
                standings = [ ...championship ];
                break;
            default:
                standings = [ ...premierLeague ];
        }

        this.setState({ standings });
    }

    render() {
        const { classes, loading, message, error } = this.props;
        const { standings } = this.state;

        if (loading) { return <PreloaderCircular />; }
        if (error) { return <ErrorIndicator />; }

        return (
            <div>
                <Typography
                    component="div"
                    color="primary"
                    variant="h5"
                    align="center"
                    className={classes.title}
                >
                    STANDINGS
                </Typography>
                <div className={classes.buttonContainer}>
                    <Button size="small" variant="contained" color="primary" onClick={() => this.setStandingsByFilter('premierLeague')} className={classes.button}>
                        Pr League
                    </Button>
                    <Button size="small" variant="contained" color="primary" onClick={() => this.setStandingsByFilter('FAWSL')} className={classes.button}>
                        FA WSL
                    </Button>
                    <Button size="small" variant="contained" color="primary" onClick={() => this.setStandingsByFilter('championship')} className={classes.button}>
                        Championship
                    </Button>
                </div>
                <div>
                    <List>
                        <ListItem alignItems="center" className={[classes.listItem, classes.header]}>
                            <div>rank</div>
                            <div>team</div>
                            <div>points</div>
                        </ListItem>
                        {
                            standings.map(standing => {
                                return (
                                        <ListItem alignItems="center" className={classes.listItem}>
                                            <div>
                                                {standing.rank}
                                            </div>
                                            <div>
                                                <ListItemAvatar>
                                                    <Avatar alt="Remy Sharp" src={standing.logo} className={classes.teamLogo}/>
                                                </ListItemAvatar>
                                                {standing.teamName}
                                            </div>
                                            <div>
                                                {standing.points}
                                            </div>
                                        </ListItem>
                                )
                            })
                        }
                    </List>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ standings: { standings, loading, message, error }}) => {
    return { standings, loading, message, error };
};

const mapDispatchToProps = (dispatch, { appService }) => {
    return bindActionCreators({
        fetchStandings: fetchStandings(appService),
    }, dispatch);
};

Standings.propTypes = {
    standings: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

export default compose(
    withStyles(styles),
    withAppService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Standings);