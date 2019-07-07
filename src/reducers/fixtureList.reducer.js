const fixtureList = (state, action) => {

    if (state === undefined) {
        return {
            fixtures: [],
            loading: true,
            error: null
        };
    }
  
    switch (action.type) {
        case 'FETCH_FIXTURES_REQUEST':
            return {
                fixtures: [],
                loading: true,
                error: null
            };
    
        case 'FETCH_FIXTURES_SUCCESS':
            return {
                fixtures: action.payload,
                loading: false,
                error: null
            };
    
        case 'FETCH_FIXTURES_FAILURE':
            return {
                fixtures: [],
                loading: false,
                error: action.payload
            };
    
        default:
            return state;
        }
  };
  
  export default fixtureList;
  