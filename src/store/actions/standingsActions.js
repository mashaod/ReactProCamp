import {
    FETCH_STANDINGS_REQUEST,
    FETCH_STANDINGS_SUCCESS,
    FETCH_STANDINGS_FAILURE
} from '../actionTypes';

function standingsRequested() {
    return {
        type: FETCH_STANDINGS_REQUEST
    };
};

function standingsLoaded(data) {
    return {
        type: FETCH_STANDINGS_SUCCESS,
        payload: data
    };
};

function standingsError(error) {
    return {
        type: FETCH_STANDINGS_FAILURE,
        payload: error
    };
};

const fetchStandings = (appService) => () => (dispatch) => {
    //dispatch(standingsRequested());

    appService.getStandings()
        .then((data) => {
            console.log(data)
            // const message = teams.length > 0 ? null : 'Team does not exist';
            // const team = teams[0] || [];
            // return dispatch(standingsLoaded({ team, message }));
        })
        //.catch((err) => dispatch(standingsError(err)));
};

export {
    fetchStandings
};