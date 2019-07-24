import { combineReducers } from 'redux';
import teamList from './teamList.reducer';
import teamCard from './teamCard.reducer';
import fixtureList from './fixtureList.reducer';

const reducer = combineReducers({
  teamList: teamList,
  teamCard: teamCard,
  fixtureList: fixtureList
});

export default reducer;
