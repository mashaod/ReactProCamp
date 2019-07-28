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

function standingsLoaded(standings) {
    return {
        type: FETCH_STANDINGS_SUCCESS,
        payload: standings
    };
};

function standingsError(error) {
    return {
        type: FETCH_STANDINGS_FAILURE,
        payload: error
    };
};

const fetchStandings = (appService) => () => (dispatch) => {
    dispatch(standingsRequested());

    return appService.getStandings()
        .then((standings) => {
            dispatch(standingsLoaded(standings));
            return { ...standings };
        })
        .catch((err) => dispatch(standingsError(err)));
};

export {
    fetchStandings
};