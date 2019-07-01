import axios from 'axios';

export default axios.create({
    baseURL: 'https://api-football-v1.p.rapidapi.com/v2/',
    headers: {
      'X-RapidAPI-Key': '3bc3316c2dmsh8e41b1e957eb5b0p1ba874jsn673415bd6a58'
    }
});