import React from 'react';
import TeamList from '../components/teamList';

import Box from '@material-ui/core/Box';

const TeamsPage = () =>
    <Box display="flex" justifyContent="center" m={2} p={2}>
        <TeamList />
    </Box>

export default TeamsPage;