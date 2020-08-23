import { ACTION_NAMES } from './actions';

const INITIAL_STATE = {
  myTeam: null
};

export default function reduce(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_NAMES.FETCH_MY_TEAM:
      return {
        ...state,
        myTeam: action.team,
      };
    case ACTION_NAMES.SET_MY_TEAM:
      return {
        ...state,
        myTeam: action.team,
      };
    default:
      return state;
  }
}
