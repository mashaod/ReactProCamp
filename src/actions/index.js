import { 
    teamsRequested,
    teamsLoaded,
    teamsError,
    teamRequested,
    teamLoaded,
    teamError,
    fixturesRequested,
    fixturesLoaded,
    fixturesError
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

const fetchFixtures = (appService) => () => (dispatch) => {
    dispatch(fixturesRequested());
    appService.getFixtures()
        .then(({ fixtures }) => dispatch(fixturesLoaded(fixtures)))
        .catch((err) => dispatch(fixturesError(err)));
};
  
export {
    fetchTeams,
    fetchTeamById,
    fetchFixtures
};