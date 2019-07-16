import teamList from './teamList.reducer';
import teamCard from './teamCard.reducer';
import fixtureList from './fixtureList.reducer';
import fixtureCard from './fixtureCard.reducer';

const reducer = (state, action) => {
  return {
    teamList: teamList(state, action),
    teamCard: teamCard(state, action),
    fixtureList: fixtureList(state, action),
    fixtureCard: fixtureCard(state, action)
  };
};

export default reducer;
