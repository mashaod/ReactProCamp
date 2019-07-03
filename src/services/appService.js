import requestHandler from './helpers/requestHandler';

export default class AppService {
    getTeams = () => {
        return requestHandler({
            emptyData: false,
            url: `teams/league/2`,
            method: 'GET'
        });
    };

    getTeamById = async (teamId) => {
        return requestHandler({
            emptyData: false,
            options: {
                url: `teams/team/${Number(teamId)}`,
                method: 'GET'
            }
        })
    }
}
