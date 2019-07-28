import { combineReducers } from 'redux';
import teamList from './teamList.reducer';
import teamCard from './teamCard.reducer';
import fixtureList from './fixtureList.reducer';
import standings from './standings.reducer';

const reducer = combineReducers({
  teamList: teamList,
  teamCard: teamCard,
  fixtureList: fixtureList,
  standings: standings
});

export default reducer;
