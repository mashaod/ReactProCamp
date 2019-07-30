import {
    FETCH_ODDS_REQUEST,
    FETCH_ODDS_FAILURE,
    FETCH_ODDS_SUCCESS,
} from '../actionTypes';

function oddsRequested() {
    return {
        type: FETCH_ODDS_REQUEST
    };
};

function oddsLoaded(odds) {
    return {
        type: FETCH_ODDS_SUCCESS,
        payload: odds
    };
};

function oddsError(error) {
    return {
        type: FETCH_ODDS_FAILURE,
        payload: error
    };
};

const fetchOdds = (appService) => () => (dispatch) => {
    dispatch(oddsRequested());

    appService.getOdds()
        .then(({ odds }) => {
            console.log(odds)
            dispatch(oddsLoaded(odds))
        })
        .catch((err) => dispatch(oddsError(err)));
};

export {
    fetchOdds,
};