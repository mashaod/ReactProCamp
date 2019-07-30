import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

function styles(theme) {
    return {
        root: {
            margin: 0,
            padding: theme.spacing(2),
            justifyContent: 'center',
            alignItems: "center"
        },
        team: {
            justifyContent: 'center'
        },
        delimiter: {
            justifyContent: 'center'
        }
    }
};

const DialogHeader = (props) => {
    const { fixture: { homeTeam, goalsHomeTeam, awayTeam, goalsAwayTeam }, classes: { root, team, delimiter } } = props;
    return (
        <Fade in={true} timeout={2000}>
            <Grid container className={root}>
                <Grid container item xs={3} className={team}>
                    <img src={homeTeam.logo} alt="homeTeam logo"/>
                    <h2>{homeTeam.team_name}</h2>
                </Grid>

                <Grid container item xs={6} md={3} className={delimiter}>
                    <Typography align="center" variant="h2">
                        {goalsHomeTeam} : {goalsAwayTeam}
                    </Typography>
                </Grid>

                <Grid container item xs={3} className={team}>
                    <img src={awayTeam.logo} alt="awayTeam logo"/>
                    <h2>{awayTeam.team_name}</h2>
                </Grid>
            </Grid>
        </Fade>
    );
};

DialogHeader.propTypes = {
    fixture: PropTypes.object.isRequired
};

export default withStyles(styles)(DialogHeader);