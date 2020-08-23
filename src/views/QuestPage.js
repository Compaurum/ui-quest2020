import React from "react"
import { compose } from 'redux'
import { connect } from 'react-redux'
import ensureAuthorized from '../hocs/ensureAuthorized';

import Quest from "../components/Quest"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import image from '../assets/images/logo-medium.jpg' // Это тоже заглушка :)
import "./global.scss"

const fakeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // Это заглушка

const QuestPage = () => {
  return (
    <div>
      <div className="wrapper-container">
        <Header teamName="Кузнечики" timer={true} color="#fff" />
        <Quest
          questions={fakeArray}
          textFirstHint='Это не квадрат'
          imageSecondHint={image}
        />
        <Navigation />
      </div>
    </div>
  )
}

export default compose(
  ensureAuthorized,
  connect(null, null)
)(QuestPage)