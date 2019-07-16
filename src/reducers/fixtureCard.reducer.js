const fixtureCard = (state, action) => {

    if (state === undefined) {
        return {
            fixture: {},
            loading: true,
            error: null
        };
    }
  
    switch (action.type) {
        case 'FETCH_FIXTURE_REQUEST':
            return {
                fixture: action.payload || {},
                loading: true,
                error: null
            };
    
        case 'FETCH_FIXTURE_SUCCESS':
            return {
                fixture: action.payload,
                loading: false,
                error: null
            };
    
        case 'FETCH_FIXTURE_FAILURE':
            return {
                fixture: {},
                loading: false,
                error: action.payload
            };
    
        default:
            return state.fixtureCard;
        }
  };
  
  export default fixtureCard;
  