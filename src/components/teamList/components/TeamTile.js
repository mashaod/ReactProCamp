
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles';

import Box from '@material-ui/core/Box';

function TeamsByRowGroups({ team, classes }) {
    const { team_id, name, logo, venue_city } = team;
    const { teamLink, control, paper } = classes;

    return (
        <Link to={`/teams/${team_id}`} className={ teamLink }>
            <Box className={`${ control }, ${ paper }`} m={2} p={2}>
                <h2>{ name }</h2>
                <img src={ logo } alt="team logo"></img>
                <p><i>{ venue_city }</i></p>
            </Box>
        </Link>
    )
};

TeamsByRowGroups.propTypes = {
    team: PropTypes.object.isRequired
};

export default withStyles(styles)(TeamsByRowGroups);