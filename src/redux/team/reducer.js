import { ACTION_NAMES } from './actions';

const INITIAL_STATE = {
  myTeam: null,
  photoTasks: []
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
    case ACTION_NAMES.SET_QUESTIONS:
      return {
        ...state,
        photoTasks: action.tasks,
      };
    default:
      return state;
  }
}
