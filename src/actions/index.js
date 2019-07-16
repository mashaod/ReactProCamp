import { 
    teamsRequested,
    teamsLoaded,
    teamsError,
    teamRequested,
    teamLoaded,
    teamError,
    fixturesRequested,
    fixturesLoaded,
    fixturesError,
    fixtureRequested,
    fixtureLoaded,
    fixtureError
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
        .then(({ teams=[] }) => {
            const message = teams.length > 0 ? null : 'Team does not exist';
            const team = teams[0] || [];
            return dispatch(teamLoaded({ team, message }));
        })
        .catch((err) => dispatch(teamError(err)));
};

const fetchFixtures = (appService) => () => (dispatch) => {
    dispatch(fixturesRequested());

    appService.getFixtures()
        .then(({ fixtures }) => {
            const sortedFixtures = [...fixtures].reverse();
            dispatch(fixturesLoaded(sortedFixtures))
        })
        .catch((err) => dispatch(fixturesError(err)));
};

const fetchFixture = (appService) => (fixture) => (dispatch) => {
    dispatch(fixtureRequested(fixture));

    appService.getFixture(fixture.fixture_id)
        .then(({ fixtures=[] }) => {
            const fixture = fixtures[0] || {};
            dispatch(fixtureLoaded(fixture))
        })
        .catch((err) => dispatch(fixtureError(err)));
};
  
export {
    fetchTeams,
    fetchTeamById,
    fetchFixtures,
    fetchFixture
};