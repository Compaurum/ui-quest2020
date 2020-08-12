import React from 'react'

import Header from '../components/Header/'
import './global.scss'

const Welcome = () => {
return (
  <div className='wrapper-container'>
  <Header teamName="Кузнечики" timer={false} color="#fff"/>
    <div className="welcome">
      <h1 className="welcome__heading">Добро пожаловать на ProЖарку разума!</h1>
      <p className="welcome__text">
        При нажатии на кнопку "Начать квест", открывается первая загадка и включается таймер.
      </p>
      <p className="welcome__ready">Готовы?</p>
      <a href="/quest" className="welcome__btn">Начать квест</a>
    </div>
  </div>
)}

export default Welcome