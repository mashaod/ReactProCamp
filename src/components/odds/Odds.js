import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { withAppService } from '../../hoc';
import { fetchOdds } from '../../store/actions/odds.actions';

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

class Odds extends Component {

    componentDidMount() {
        this.props.fetchOdds()
    }

    getDate = (time) => {
        return  new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: 'numeric',
            minute: 'numeric'
        }).format(new Date(time))
    }

    render() {
        const { odds, loading, message, error, classes } = this.props;

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
                    ODDS
                </Typography>
                <List>
                    {
                        odds.map(odd => (
                            <ListItem key={odd.fixture_id}>
                                <div className={classes.oddsSection}>
                                    <div className={classes.teams}>
                                        <div className={classes.leftTeam}>
                                            <div>
                                                <ListItemAvatar>
                                                    <Avatar alt="Remy Sharp" src={odd.homeTeam.logo} className={classes.teamLogo}/>
                                                </ListItemAvatar>
                                            </div>
                                            <div>{odd.homeTeam.team_name}</div>
                                        </div>
                                        <div className={classes.odds}>
                                            <Button size="small" variant="contained" color="primary" className={classes.button}>
                                                {odd.homeOdd}
                                            </Button>
                                            <div>VS</div>
                                            <Button size="small" variant="contained" color="primary" className={classes.button}>
                                                {odd.awayOdd}
                                            </Button>
                                        </div>
                                        <div className={classes.rightTeam}>
                                            <div>{odd.awayTeam.team_name}</div>
                                                <ListItemAvatar>
                                                    <Avatar alt="Remy Sharp" src={odd.awayTeam.logo} className={classes.teamLogo}/>
                                                </ListItemAvatar>
                                        </div>
                                    </div>
                                    <div className={classes.info}>
                                        <div className={classes.league}>
                                            Premier League
                                        </div>
                                        <div className={classes.timeSection}>
                                            {this.getDate(odd.event_date)}
                                        </div>
                                    </div>
                                </div>
                            </ListItem>
                        ))
                    }
                </List>
            </div>
        )
    }
}

const mapStateToProps = ({ oddList: { odds, loading, message, error }}) => {
    return { odds, loading, message, error };
};

const mapDispatchToProps = (dispatch, { appService }) => {
    return bindActionCreators({
        fetchOdds: fetchOdds(appService),
    }, dispatch);
};

Odds.propTypes = {
    odds: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

export default compose(
    withStyles(styles),
    withAppService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Odds);