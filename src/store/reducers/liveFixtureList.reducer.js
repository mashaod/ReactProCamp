import {
    FETCH_LIVE_FIXTURES_REQUEST,
    FETCH_LIVE_FIXTURES_FAILURE,
    FETCH_LIVE_FIXTURES_SUCCESS
} from '../actionTypes';


const liveFixtureList = (state, action) => {

    if (state === undefined) {
        return {
            liveFixtures: [],
            liveFixturesPL: [],
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case FETCH_LIVE_FIXTURES_REQUEST:
            return {
                liveFixtures: [],
                liveFixturesPL: [],
                loading: true,
                error: null
            };

        case FETCH_LIVE_FIXTURES_SUCCESS:
            return {
                liveFixtures: action.payload.fixtures || [],
                liveFixturesPL: action.payload.fixturesPL || [],
                loading: false,
                error: null
            };

        case FETCH_LIVE_FIXTURES_FAILURE:
            return {
                liveFixtures: [],
                liveFixturesPL: [],
                loading: false,
                error: action.payload
            };

        default:
            return state;
        }
  };

  export default liveFixtureList;
