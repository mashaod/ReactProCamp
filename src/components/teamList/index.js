import React, { Component } from 'react';
import ErrorIndicator from '../errorIndicator';
import PreloaderCircular from '../preloaderCircular';
import { withAppService } from '../../hoc';
import TeamsByRowGroups from './components/TeamsByRowGroups';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';

class TeamList extends Component {
 _isMounted = false;

  state = {
    teams: [],
    loading: true,
    error: false
  };

  componentDidMount() {
    this._isMounted = true;

    this.props.appService.getTeams()
      .then(({ teams }) => {
        this.setState({
          teams,
          loading: false
        })
      })
      .catch((err) => this.setState({ 
        error: true, 
        loading: false 
      }))
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { teams, loading, error } = this.state;

    if (loading) { return <PreloaderCircular />; }
    if (error) { return <ErrorIndicator />; }

    return (
      <Paper>
        <Table>
          <TableBody>
            <TeamsByRowGroups teams={teams} count="4" />
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withAppService(TeamList);
