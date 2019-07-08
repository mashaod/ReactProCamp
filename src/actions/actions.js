/*
 * action types
 */

export const FETCH_TEAMS_REQUEST = 'FETCH_TEAMS_REQUEST'
export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS'
export const FETCH_TEAMS_FAILURE = 'FETCH_TEAMS_FAILURE'
export const FETCH_TEAM_BY_ID_REQUEST = 'FETCH_TEAM_BY_ID_REQUEST'
export const FETCH_TEAM_BY_ID_SUCCESS = 'FETCH_TEAM_BY_ID_SUCCESS'
export const FETCH_TEAM_BY_ID_FAILURE = 'FETCH_TEAM_BY_ID_FAILURE'

/*
 * action creators
 */

export function teamsRequested() {
    return {
        type: 'FETCH_TEAMS_REQUEST'
    };
};

export function teamsLoaded(teams) {
    return {
        type: 'FETCH_TEAMS_SUCCESS',
        payload: teams
    };
};

export function teamsError(error) {
    return {
        type: 'FETCH_TEAMS_FAILURE',
        payload: error
    };
};

export function teamRequested() {
    return {
        type: 'FETCH_TEAM_BY_ID_REQUEST'
    };
};

export function teamLoaded(data) {
    return {
        type: 'FETCH_TEAM_BY_ID_SUCCESS',
        payload: data
    };
};

export function teamError(error) {
    return {
        type: 'FETCH_TEAM_BY_ID_FAILURE',
        payload: error
    };
};

export function fixturesRequested() {
    return {
        type: 'FETCH_FIXTURES_REQUEST'
    };
};

export function fixturesLoaded(fixtures) {
    return {
        type: 'FETCH_FIXTURES_SUCCESS',
        payload: fixtures
    };
};

export function fixturesError(error) {
    return {
        type: 'FETCH_FIXTURES_FAILURE',
        payload: error
    };
};