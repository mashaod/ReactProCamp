import React from 'react';
import PropTypes from 'prop-types';

import LiveFixtureListItem from './LiveFixtureListItem';

import List from '@material-ui/core/List';


const LiveFixtureList = ({ fixtures }) => {

    return (
        <List>
        {
            fixtures.map((fixture, index) => {
                const isLast = fixture.lenght === index + 1;

                return (
                    <LiveFixtureListItem 
                        key={fixture.fixture_id}
                        fixture={fixture} 
                        isLast={isLast}
                    />
                )
            })
        }
        </List>
    );
};

LiveFixtureList.propTypes = {
    fixtures: PropTypes.array.isRequired,
    isLast: PropTypes.bool
};

export default LiveFixtureList;