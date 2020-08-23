import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth/reducer';
// import forms from './forms/reducer';
// import orders from './orders/reducer';
// import themeChanger from './themeChanger/reducer';
// import LanguageSwitcher from './languageSwitcher/reducer';
// import themeSetting from './themeSettings/reducer';
// import scrumboard from './scrumboard/reducer';
// import installers from './installers/reducer';
import requests from './requests/reducer';
// import companies from './companies/reducer';

const createReducer = (asyncReducers) => combineReducers({
  auth,
  // forms,
  // orders,
  // installers,
  // companies,
  // themeChanger,
  // LanguageSwitcher,
  // themeSetting,
  // scrumboard,
  requests,
  router: routerReducer,
  ...asyncReducers,
});

export default createReducer;
