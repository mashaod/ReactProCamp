import API from '../config/api';

export default class AppService {
    getTeams = async () => {
        try {
            const response = await API.get(`teams/league/2`);
            // Success
            return response.data.api;
        } catch (error) {
            // Error
            if (error.response) {
                /*
                * The request was made and the server responded with a
                * status code that falls out of the range of 2xx
                */
                console.error('Message: ', error.response.data.message);
                console.error('Status: ', error.response.status);
                console.error('Headers: ', error.response.headers);
            } else if (error.request) {
                /*
                * The request was made but no response was received, `error.request`
                * is an instance of XMLHttpRequest in the browser and an instance
                * of http.ClientRequest in Node.js
                */
                console.error('Error', error.request);
            } else {
                // Something happened in setting up the request and triggered an Error
                console.error('Error', error.message);
            }

            console.error(error.config);
            return Promise.reject(error);
        }
    };
}
