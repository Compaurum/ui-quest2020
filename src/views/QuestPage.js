import React from "react"

import Quest from "../components/Quest"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import "./global.scss"

const fakeArray = [1,2,3,4,5,6,7,8,9,10] // Это заглушка

const QuestPage = () => {
  return (
    <div>
      <div className="wrapper-container">
        <Header teamName="Кузнечики" timer={true} color="#fff"/>
        <Quest questions={fakeArray}/>
        <Navigation />
      </div>
    </div>
  )
}

export default QuestPage