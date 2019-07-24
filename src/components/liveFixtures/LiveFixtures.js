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

class LiveFixtures extends Component {

    componentDidMount() {
        this.props.fetchLiveFixtures();
    }

    render() {
        const { liveFixtures, liveFixturesPL, loading, error, classes } = this.props;

        if (loading) { return <PreloaderCircular />; }
        if (error) { return <ErrorIndicator />; }

        return (
            <Grid container item xs={12} justify="center">
                TEST
            </Grid>
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