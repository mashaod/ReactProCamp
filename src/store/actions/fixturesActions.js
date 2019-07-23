import {
    FETCH_FIXTURES_REQUEST,
    FETCH_FIXTURES_FAILURE,
    FETCH_FIXTURES_SUCCESS
} from '../actionTypes';

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
            dispatch(fixturesLoaded(sortedFixtures))
        })
        .catch((err) => dispatch(fixturesError(err)));
};

export {
    fetchFixture,
    fetchFixtures
};