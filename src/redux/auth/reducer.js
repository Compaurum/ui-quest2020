import { ACTION_NAMES } from './actions';

const INITIAL_STATE = {
  token: null,
  currentUser: null,

  isLoginInProgress: false,
  loginError: null,

  isRegisterInProgress: false,
  registerError: null,
  isRegisterSuccessful: false,
};

export default function reduce(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_NAMES.SET_AUTH_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case ACTION_NAMES.REMOVE_AUTH_TOKEN:
      return {
        ...state,
        token: null,
      };
    case ACTION_NAMES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
      };
    case ACTION_NAMES.REMOVE_CURRENT_USER:
      return {
        ...state,
        currentUser: null,
      };
    case ACTION_NAMES.SET_MY_COMPANY:
      return {
        ...state,
        myCompany: action.company,
      };
    case ACTION_NAMES.REMOVE_MY_COMPANY:
      return {
        ...state,
        myCompany: null,
      };
    default:
      return state;
  }
}
