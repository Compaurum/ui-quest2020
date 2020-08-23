import React from 'react'
import ensureAuthorized from '../hocs/ensureAuthorized';

import Header from '../components/Header/'
import './global.scss'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className='wrapper-container'>
      <Header teamName="Кузнечики" timer={false} color="#fff" />
      <div className="welcome">
        <h1 className="welcome__heading">Добро пожаловать на ProЖарку разума!</h1>
        <p className="welcome__text">
          При нажатии на кнопку "Начать квест", открывается первая загадка и включается таймер.
      </p>
        <p className="welcome__ready">Готовы?</p>
        <Link className="welcome__btn" to="/quest">Начать квест</Link>
      </div>
    </div>
  )
}

export default compose(
  ensureAuthorized,
  connect(null, null)
)(Welcome)