import React from 'react'
import Header from '../components/Header'
import SpecialQuest from '../components/SpecialQuest'
import './global.scss'
import { compose } from 'redux'
import ensureAuthorized from '../hocs/ensureAuthorized'

let text = `Прийдите на место сбора.`

const Ending = () => {
  return (
    <div className='wrapper-container'>
      <Header color='#fff' />
      <div className='special'>
        <h2 className='special__title'>Завершение</h2>
        {text && <p className='special__text'>{text}</p>}
        {/* <div className='special__btn' onClick={handleSubmit}>Выполнено</div> */}
      </div>
    </div>
  )
}

export default compose(ensureAuthorized)(Ending)