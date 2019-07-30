import requestHandler from './helpers/requestHandler';
import { liveFixturesMockData, oddsMockData } from './mockData';

export default class AppService {
    getTeams = () => {
        return requestHandler({
            url: `teams/league/2`,
            method: 'GET'
        });
    };

    getTeamById = (teamId) => {
        return requestHandler({
            url: `teams/team/${Number(teamId)}`,
            method: 'GET'
        })
    }

    getFixtures = () => {
        return requestHandler({
            url: `fixtures/league/2`,
            method: 'GET'
        })
    }

    getLiveFixtures = () => {
        return new Promise(resolve => setTimeout(() => resolve(liveFixturesMockData), 1000));
    }

    getOdds = () => {
        return new Promise(resolve => setTimeout(() => resolve(oddsMockData), 1000));
    }

    getFixture = (fixtureId) => {
        return requestHandler({
            url: `fixtures/id/${Number(fixtureId)}`,
            method: 'GET'
        })
    }

    getStandings = () => {
        const premierLeaguePromise = requestHandler({
            url: `leagueTable/2`,
            method: 'GET'
        })

        const ChampionshipPromise = requestHandler({
            url: `leagueTable/3`,
            method: 'GET'
        })

        const FAWSLPromise = requestHandler({
            url: `leagueTable/225`,
            method: 'GET'
        })

        return Promise.all([premierLeaguePromise, ChampionshipPromise, FAWSLPromise])
            .then(([ premierLeague, championship, FAWSLPromise ]) => {
                return {
                    premierLeague: premierLeague.standings[0] || [],
                    championship: championship.standings[0] || [],
                    FAWSL: FAWSLPromise.standings[0] || []
                }
            });
    }
}
