import React from 'react';
import FixtureList from '../components/fixtureList';

import Box from '@material-ui/core/Box';

const FixturesPage = (props) =>
    <Box display="flex" justifyContent="center" m={2} p={2}>
        <FixtureList { ...props }/>
    </Box>

export default FixturesPage;