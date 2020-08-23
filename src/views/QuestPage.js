import React from "react"
import { store, history } from '../redux/store';
import { compose } from 'redux'
import { connect } from 'react-redux'
import ensureAuthorized from '../hocs/ensureAuthorized';

import Quest from "../components/Quest"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import "./global.scss"


const QuestPage = ({ myTeam }) => {
  // const myTeam = store.getState().teams.myTeam;

  return (
    <div>
      <div className="wrapper-container">
        <Header color="#fff" />
        <Quest
          questions={myTeam.roads}
          progress={myTeam.progress}
        // textFirstHint='Это не квадрат'
        // imageSecondHint={image}
        />
        <Navigation />
      </div>
    </div>
  )
}

export default compose(
  ensureAuthorized,
  connect((state) => {
    return { myTeam: state.teams.myTeam }
  }, null)
)(QuestPage)