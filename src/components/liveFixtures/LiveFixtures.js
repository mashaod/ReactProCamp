import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { withAppService } from '../../hoc';
import { fetchLiveFixtures } from '../../store/actions/fixtures.actions';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import ErrorIndicator from '../errorIndicator';
import PreloaderCircular from '../preloaderCircular';
import LiveFixtureList from './LiveFixtureList';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

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
                <Typography
                    component="div"
                    color="primary"
                    variant="h5"
                    align="center"
                    className={classes.title}
                >
                    LIFE FIXTURES
                </Typography>
                <div className={classes.buttonContainer}>
                    <Button size="small" variant="contained" color="primary" onClick={this.showAllFixtures} className={classes.button}>
                        All
                    </Button>
                    <Button size="small" variant="contained" color="primary" onClick={this.showPLFixtures} className={classes.button}>
                        FA Premier League
                    </Button>
                </div>
                <div>
                    <LiveFixtureList fixtures={fixtures} />
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