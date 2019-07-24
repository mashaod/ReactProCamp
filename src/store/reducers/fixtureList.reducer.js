import {
    FETCH_FIXTURES_REQUEST,
    FETCH_FIXTURES_FAILURE,
    FETCH_FIXTURES_SUCCESS,
    FETCH_LIVE_FIXTURES_REQUEST,
    FETCH_LIVE_FIXTURES_FAILURE,
    FETCH_LIVE_FIXTURES_SUCCESS,
} from '../actionTypes';

const initState = {
    fixtures: [],
    liveFixtures: [],
    liveFixturesPL: [],
    isFixturesloading: true,
    isLiveFixturesloading: true,
    fixturesError: null,
    liveFixturesError: null,
};

const fixtureList = (state = initState, action) => {

    switch (action.type) {
        case FETCH_FIXTURES_REQUEST:
            return {
                ...state,
                fixtures: [],
                isFixturesloading: true,
                fixturesError: null
            };

        case FETCH_FIXTURES_SUCCESS:
            return {
                ...state,
                fixtures: action.payload.fixtures,
                isFixturesloading: false,
                fixturesError: null
            };

        case FETCH_FIXTURES_FAILURE:
            return {
                ...state,
                fixtures: [],
                isFixturesloading: false,
                fixturesError: action.payload
            };

        case FETCH_LIVE_FIXTURES_REQUEST:
            return {
                ...state,
                liveFixtures: [],
                liveFixturesPL: [],
                isLiveFixturesloading: true,
                liveFixturesError: null
            };

        case FETCH_LIVE_FIXTURES_SUCCESS:
            return {
                ...state,
                liveFixtures: action.payload.fixtures || [],
                liveFixturesPL: action.payload.fixturesPL || [],
                isLiveFixturesloading: false,
                liveFixturesError: null
            };

        case FETCH_LIVE_FIXTURES_FAILURE:
            return {
                ...state,
                liveFixtures: [],
                liveFixturesPL: [],
                isLiveFixturesloading: false,
                liveFixturesError: action.payload
            };

        default:
            return state;
        }
  };

  export default fixtureList;
