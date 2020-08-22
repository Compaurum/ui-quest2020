import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

import Login from './views/Login';
import Welcome from './views/Welcome';
import QuestPage from './views/QuestPage';
import SpecialQuest from './views/SpecialQuest';
import NextQuest from './views/NextQuest';
import Stages from './views/Stages';
import Help from './views/Help';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Login} />
    <Route exact path="/welcome" component={Welcome} />
    <Route exact path="/quest" component={QuestPage} />
    <Route exact path="/special" component={SpecialQuest} />
    <Route exact path="/next" component={NextQuest} />
    <Route exact path="/stages" component={Stages} />
    <Route exact path="/help" component={Help} />
  </BrowserRouter>,

  // <React.StrictMode>
  // <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
