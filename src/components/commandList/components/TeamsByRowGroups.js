
import React from 'react';
import _ from 'lodash';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const TeamsByRowGroups = (props) => {
  const { teams, count } = props;

  const teamGroups = _.chunk(teams, count);
  return (
    teamGroups.map((group) => (
      <TableRow key={'group_' + group[0].team_id}>

        {group.map((team) =>
          <TableCell key={team.team_id} align="center" component="th" scope="row">
            <h2>{ team.name }</h2>
            <img src={team.logo} alt="team logo"></img>
            <p><i>{ team.venue_city }</i></p>
          </TableCell>
        )}

      </TableRow>
      )
    )
  )
};

export default TeamsByRowGroups;