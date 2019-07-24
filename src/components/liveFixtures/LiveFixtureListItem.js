import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const LiveFixtureListItem = ({ fixture, isLast, classes }) => {
    const { homeTeam, awayTeam, goalsHomeTeam, goalsAwayTeam } = fixture;

    return (
        <React.Fragment>
            <ListItem alignItems="flex-start">
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
                isLast && <Divider variant="middle" component="li" />
            }
        </React.Fragment>
    );
};

LiveFixtureListItem.propTypes = {
    fixture: PropTypes.object.isRequired,
    isLast: PropTypes.bool
};

export default withStyles(styles)(LiveFixtureListItem);