import {
    FETCH_TEAMS_REQUEST,
    FETCH_TEAMS_FAILURE,
    FETCH_TEAMS_SUCCESS
} from '../actionTypes';

const teamList = (state, { type, payload }) => {

    if (state === undefined) {
        return {
            teams: [],
            loading: true,
            error: null
        };
    }

    switch (type) {
        case FETCH_TEAMS_REQUEST:
            return {
                teams: [],
                loading: true,
                error: null
            };

        case FETCH_TEAMS_SUCCESS:
            return {
                teams: payload,
                loading: false,
                error: null
            };

        case FETCH_TEAMS_FAILURE:
            return {
                teams: [],
                loading: false,
                error: payload
            };

        default:
            return state.teamList;
        }
  };

  export default teamList;
