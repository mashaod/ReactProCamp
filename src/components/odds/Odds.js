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