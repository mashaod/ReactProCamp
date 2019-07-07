import { 
    teamsRequested,
    teamsLoaded,
    teamsError,
    teamRequested,
    teamLoaded,
    teamError
} from './actions';

const fetchTeams = (appService) => () => (dispatch) => {
    dispatch(teamsRequested());
    appService.getTeams()
        .then(({ teams }) => dispatch(teamsLoaded(teams)))
        .catch((err) => dispatch(teamsError(err)));
};

const fetchTeamById = (appService) => (teamId) => (dispatch) => {
    dispatch(teamRequested());
    appService.getTeamById(teamId)
        .then(({ teams }) => {
            const message = teams.length > 0 ? null : 'Team does not exist';
            const team = teams[0] || [];
            return dispatch(teamLoaded({ team, message }));
        })
        .catch((err) => dispatch(teamError(err)));
};
  
export {
    fetchTeams,
    fetchTeamById
};