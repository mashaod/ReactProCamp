import {
    FETCH_TEAM_BY_ID_REQUEST,
    FETCH_TEAM_BY_ID_SUCCESS,
    FETCH_TEAM_BY_ID_FAILURE
} from '../actionTypes';

function teamRequested() {
    return {
        type: FETCH_TEAM_BY_ID_REQUEST
    };
};

function teamLoaded(data) {
    return {
        type: FETCH_TEAM_BY_ID_SUCCESS,
        payload: data
    };
};

function teamError(error) {
    return {
        type: FETCH_TEAM_BY_ID_FAILURE,
        payload: error
    };
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

export {
    fetchTeamById
};