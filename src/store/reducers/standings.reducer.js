import {
    FETCH_STANDINGS_REQUEST,
    FETCH_STANDINGS_FAILURE,
    FETCH_STANDINGS_SUCCESS
} from '../actionTypes';

const initState = {
    standings: {},
    loading: true,
    message: null,
    error: null
};

const teamCard = (state = initState, { type, payload }) => {

    switch (type) {
        case FETCH_STANDINGS_REQUEST:
            return {
                standings: {},
                loading: true,
                message: null,
                error: null
            };

        case FETCH_STANDINGS_SUCCESS:
            return {
                standings: payload,
                loading: false,
                message: payload.message,
                error: null
            };

        case FETCH_STANDINGS_FAILURE:
            return {
                standings: {},
                loading: false,
                error: payload
            };

        default:
            return state;
        }
  };

  export default teamCard;
