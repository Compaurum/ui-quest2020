import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import createReducer from './reducers';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['auth'],
// };
const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, routeMiddleware];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const persistedReducer = persistReducer(persistConfig, createReducer());
const store = createStore(createReducer(), composeEnhancer(applyMiddleware(...middlewares)));
// const persistor = persistStore(store);

export { store, history };
