import {
    FETCH_TEAM_BY_ID_REQUEST,
    FETCH_TEAM_BY_ID_FAILURE,
    FETCH_TEAM_BY_ID_SUCCESS
} from '../actionTypes';

const initState = {
    team: {},
    loading: true,
    message: null,
    error: null
};

const teamCard = (state = initState, { type, payload }) => {

    switch (type) {
        case FETCH_TEAM_BY_ID_REQUEST:
            return {
                team: {},
                loading: true,
                message: null,
                error: null
            };

        case FETCH_TEAM_BY_ID_SUCCESS:
            return {
                team: payload.team,
                loading: false,
                message: payload.message,
                error: null
            };

        case FETCH_TEAM_BY_ID_FAILURE:
            return {
                team: {},
                loading: false,
                error: payload
            };

        default:
            return state;
        }
  };

  export default teamCard;
