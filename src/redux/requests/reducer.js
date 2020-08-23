import { ACTION_NAMES } from './actions';

const INITIAL_STATE = {};

export default function reduce(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_NAMES.SET_REQUEST_IN_PROGRESS:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          isInProgress: action.value,
        },
      };
    case ACTION_NAMES.SET_REQUEST_SUCCESSFUL:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          isSuccessful: action.value,
        },
      };
    case ACTION_NAMES.SET_REQUEST_ERROR:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          error: action.error,
        },
      };
    case ACTION_NAMES.CLEAR_REQUESTS:
      return INITIAL_STATE;
    default:
      return state;
  }
}
