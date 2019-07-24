import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import LiveFixtures from '../components/liveFixtures';
//import Standings from '../components/Standings';
//import Odds from '../components/Odds';

function styles(theme) {
    return {
        root: {
            flexGrow: 1,
          },
          paper: {
            minHeight: 600,
            margin: (0, theme.spacing(2)),
            position: "relative"
          },
    }
}

const HomePage = ({ classes }) =>
    <Box display="flex" justifyContent="center" m={2} p={2}>
        <Grid container justify="center" className={classes.root}>
            <Grid item md={4} position="relative">
                <Paper className={classes.paper}>
                    <LiveFixtures />
                </Paper>
            </Grid>
            <Grid item md={4}>
                <Paper className={classes.paper}>
                    Standing
                </Paper>
            </Grid>
            <Grid item md={4}>
                <Paper className={classes.paper}>
                    Odds
                </Paper>
            </Grid>
        </Grid>
    </Box>


export default withStyles(styles)(HomePage);