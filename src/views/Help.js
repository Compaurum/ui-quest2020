import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

const Help = () => {
  return (
    <div className="wrapper-container">
      <Header color='#fff' teamName='Кузнечики'/>
      <div className="help">
        <p className="help__title">Служба поддержки:</p>
        <p>- проблемы с сайтом - Денис Иванов</p>
        <p>- вопросы с заданиями - Денис Федорус</p>
        <p className="help__disconect">Если не помогают - звоните в рельсу!</p>
      </div>
      <Navigation />
    </div>
  )
}

export default Help 