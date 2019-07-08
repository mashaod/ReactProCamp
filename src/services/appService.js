import requestHandler from './helpers/requestHandler';

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
}
