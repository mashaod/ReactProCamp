import {
    FETCH_ODDS_REQUEST,
    FETCH_ODDS_FAILURE,
    FETCH_ODDS_SUCCESS,
} from '../actionTypes';

function oddsRequested() {
    return {
        type: FETCH_ODDS_REQUEST
    };
};

function oddsLoaded(odds) {
    return {
        type: FETCH_ODDS_SUCCESS,
        payload: odds
    };
};

function oddsError(error) {
    return {
        type: FETCH_ODDS_FAILURE,
        payload: error
    };
};

const fetchOdds = (appService) => () => (dispatch) => {
    dispatch(oddsRequested());

    appService.getOdds()
        .then(({ odds }) => {
            const newOddsData = [];

            odds.forEach((odd, index)=> {
                appService.getMockFixture(odd.fixture.fixture_id)
                        .then(({ fixtures }) => {
                            if (!fixtures || !fixtures || !fixtures.length|| !odd.bookmakers || !odd.bookmakers[0]) {
                                if (index === odds.length) return newOddsData;
                                return;
                            }

                            const fixture = fixtures[0];
                            const winnerBet = odd.bookmakers[0].bets.find(b => b.label_id === 1);
                            const homeOdd = winnerBet.values.find(b => b.value === 'Home');
                            const awayOdd = winnerBet.values.find(b => b.value === 'Away');

                            const data = {
                                event_date: fixture.event_date,
                                homeTeam: fixture.homeTeam,
                                awayTeam: fixture.awayTeam,
                                homeOdd: homeOdd.odd,
                                awayOdd: awayOdd.odd
                            }

                            newOddsData.push(data);
                            if (index + 1 === odds.length) dispatch(oddsLoaded(newOddsData))
                        })
                        .catch(err => {
                            if (newOddsData.length > 0) dispatch(oddsLoaded(newOddsData));
                            dispatch(oddsError(err));
                        })
            });
        })
        .catch((err) => dispatch(oddsError(err)));
};

export {
    fetchOdds,
};