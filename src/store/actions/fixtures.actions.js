import {
    FETCH_FIXTURES_REQUEST,
    FETCH_FIXTURES_FAILURE,
    FETCH_FIXTURES_SUCCESS,
    FETCH_LIVE_FIXTURES_REQUEST,
    FETCH_LIVE_FIXTURES_FAILURE,
    FETCH_LIVE_FIXTURES_SUCCESS
} from '../actionTypes';

const PremierleagueId = 2;

function fixturesRequested() {
    return {
        type: FETCH_FIXTURES_REQUEST
    };
};

function fixturesLoaded(fixtures) {
    return {
        type: FETCH_FIXTURES_SUCCESS,
        payload: fixtures
    };
};

function fixturesError(error) {
    return {
        type: FETCH_LIVE_FIXTURES_FAILURE,
        payload: error
    };
};

function liveFixturesRequested() {
    return {
        type: FETCH_LIVE_FIXTURES_REQUEST
    };
};

function liveFixturesLoaded(liveFixturesData) {
    return {
        type: FETCH_LIVE_FIXTURES_SUCCESS,
        payload: liveFixturesData
    };
};

function liveFixturesError(error) {
    return {
        type: FETCH_FIXTURES_FAILURE,
        payload: error
    };
};

const fetchFixture = (appService) => (fixture) => (dispatch) => {
    return appService.getFixture(fixture.fixture_id)
        .then(({ fixtures=[] }) => {
            return fixtures[0] || {};
        })
        .catch(() => Promise.reject());
};

const fetchFixtures = (appService) => () => (dispatch) => {
    dispatch(fixturesRequested());

    appService.getFixtures()
        .then(({ fixtures }) => {
            const sortedFixtures = [...fixtures].reverse();
            dispatch(fixturesLoaded({ fixtures: sortedFixtures }))
        })
        .catch((err) => dispatch(fixturesError(err)));
};

const fetchLiveFixtures = (appService) => () => (dispatch) => {
    dispatch(liveFixturesRequested());

    return appService.getLiveFixtures()
        .then(({ fixtures }) => {
            const fixturesPL = fixtures.filter((f) => f.league_id === PremierleagueId);
            dispatch(liveFixturesLoaded({ fixtures, fixturesPL }))
            return [ ...fixtures ];
        })
        .catch((err) => dispatch(liveFixturesError(err)));
};

export {
    fetchFixture,
    fetchFixtures,
    fetchLiveFixtures
};