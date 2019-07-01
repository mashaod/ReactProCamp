import API from '../config/api';

export default class AppService {
  getTeams = async () => {
    const response = await API.get(`teams/league/2`);
    return response.data.api;
  };
}
