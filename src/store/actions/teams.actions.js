import {
    FETCH_TEAMS_REQUEST,
    FETCH_TEAMS_SUCCESS,
    FETCH_TEAMS_FAILURE
} from '../actionTypes';

function teamsRequested() {
    return {
        type: FETCH_TEAMS_REQUEST
    };
};

function teamsLoaded(teams) {
    return {
        type: FETCH_TEAMS_SUCCESS,
        payload: teams
    };
};

function teamsError(error) {
    return {
        type: FETCH_TEAMS_FAILURE,
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


