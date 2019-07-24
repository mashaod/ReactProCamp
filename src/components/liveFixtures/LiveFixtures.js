import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { withAppService } from '../../hoc';
import { fetchLiveFixtures } from '../../store/actions/fixturesActions';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import Grid from '@material-ui/core/Grid';

class LiveFixtures extends Component {

    render() {

        return (
            <Grid container item xs={12} justify="center">
                LIVE FIXTURES
            </Grid>
        )
    }
}


export default compose(
    withStyles(styles)
)(LiveFixtures);