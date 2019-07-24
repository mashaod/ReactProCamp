import requestHandler from './helpers/requestHandler';
import { liveFixtures } from './mockData';

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
        return new Promise(resolve => setTimeout(() => resolve(liveFixtures), 1500));
    }

    getFixture = (fixtureId) => {
        return requestHandler({
            url: `fixtures/id/${Number(fixtureId)}`,
            method: 'GET'
        })
    }
}
