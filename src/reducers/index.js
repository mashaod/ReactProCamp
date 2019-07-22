import teamList from './teamList.reducer';
import teamCard from './teamCard.reducer';
import fixtureList from './fixtureList.reducer';

const reducer = (state, action) => {
  return {
    teamList: teamList(state, action),
    teamCard: teamCard(state, action),
    fixtureList: fixtureList(state, action)
  };
};

export default reducer;
