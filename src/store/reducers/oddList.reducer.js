import {
    FETCH_ODDS_REQUEST,
    FETCH_ODDS_FAILURE,
    FETCH_ODDS_SUCCESS
} from '../actionTypes';

const initState = {
    odds: [],
    loading: true,
    error: null
};


const oddList = (state = initState, { type, payload }) => {

    switch (type) {
        case FETCH_ODDS_REQUEST:
            return {
                odds: [],
                loading: true,
                error: null
            };

        case FETCH_ODDS_SUCCESS:
            return {
                odds: payload,
                loading: false,
                error: null
            };

        case FETCH_ODDS_FAILURE:
            return {
                odds: [],
                loading: false,
                error: payload
            };

        default:
            return state;
        }
  };

  export default oddList;
