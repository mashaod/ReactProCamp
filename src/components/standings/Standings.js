import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { withAppService } from '../../hoc';
import { fetchStandings } from '../../store/actions/standingsActions';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class Standings extends Component {

    componentDidMount() {
        this.props.fetchStandings()
    }

    render() {

        return (
            <div>
                Standings
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, { appService }) => {
    return bindActionCreators({
        fetchStandings: fetchStandings(appService),
    }, dispatch);
};

// LiveFixtures.propTypes = {
//     liveFixtures: PropTypes.array.isRequired,
//     liveFixturesPL: PropTypes.array.isRequired,
//     loading: PropTypes.bool.isRequired
// };

export default compose(
    withStyles(styles),
    withAppService(),
    connect(null, mapDispatchToProps)
)(Standings);