const teamsRequested = () => {
    return {
        type: 'FETCH_TEAMS_REQUEST'
    };
};

const teamsLoaded = (teams) => {
    return {
        type: 'FETCH_TEAMS_SUCCESS',
        payload: teams
    };
};

const teamsError = (error) => {
    return {
        type: 'FETCH_TEAMS_FAILURE',
        payload: error
    };
};

const fetchTeams = (appService) => () => (dispatch) => {
    dispatch(teamsRequested());
    appService.getTeams()
        .then(({ teams }) => dispatch(teamsLoaded(teams)))
        .catch((err) => dispatch(teamsError(err)));
};
  
export {
    fetchTeams
};