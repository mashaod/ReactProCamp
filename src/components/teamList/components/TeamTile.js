
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    paper: {
        '&:hover': {
            transform: "scale(1.01)",
            transition: "0.3s",
            boxShadow: "0px 1px 12px 0px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.25), 0px 8px 5px -1px rgba(0,0,0,0.12)"
        }
    },
    control: {
      maxWidth: "250px"
    },
  }));

const TeamsByRowGroups = (props) => {
    const { team } = props;

    const classes = useStyles();

    return (
        <Link to={`/teams/${team.team_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box className={`${classes.control}, ${classes.paper}`} m={2} p={2}>
                <h2>{ team.name }</h2>
                <img src={team.logo} alt="team logo"></img>
                <p><i>{ team.venue_city }</i></p>
            </Box>
        </Link>
    )
};

export default TeamsByRowGroups;