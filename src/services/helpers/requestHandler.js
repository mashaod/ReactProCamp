import API from '../../config/api';

const requestHandler = async ({ emptyData=true, options }) => {
  try {
      const response = await API(options);

      if (emptyData === false && response.data.api.results === 0) {
        return Promise.reject({ message: 'Nothing found' });
      }

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
}

export default requestHandler;