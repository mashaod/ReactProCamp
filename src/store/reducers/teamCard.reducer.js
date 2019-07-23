import {
    FETCH_TEAM_BY_ID_REQUEST,
    FETCH_TEAM_BY_ID_FAILURE,
    FETCH_TEAM_BY_ID_SUCCESS
} from '../actionTypes';

const teamCard = (state, { type, payload }) => {

    if (state === undefined) {
        return {
            team: {},
            loading: true,
            message: null,
            error: null
        };
    }

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
            return state.teamCard;
        }
  };

  export default teamCard;
