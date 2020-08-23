import React from 'react'

import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store, history } from '../redux/store';
import Login from './Login';
import Welcome from './Welcome';
import QuestPage from './QuestPage';
import SpecialQuestPage from './SpecialQuestPage';
import NextQuest from './NextQuest';
import Stages from './Stages';
import Help from './Help';


const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route exact path="/" component={Login} />
                <Route exact path="/welcome" component={Welcome} />
                <Route exact path="/quest" component={QuestPage} />
                <Route exact path="/special" component={SpecialQuestPage} />
                <Route exact path="/next" component={NextQuest} />
                <Route exact path="/stages" component={Stages} />
                <Route exact path="/help" component={Help} />
            </Router>
        </Provider>
    )
}

export default App