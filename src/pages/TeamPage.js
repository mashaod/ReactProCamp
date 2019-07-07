import React from 'react';
import TeamCard from '../components/teamCard';

import Box from '@material-ui/core/Box';

const TeamPage = (props) =>
    <Box display="flex" justifyContent="center" m={2} p={2}>
        <TeamCard { ...props }/>
    </Box>

export default TeamPage;