import React from 'react'
import Header from '../components/Header'
import { history } from '../redux/store';

const NextQuest = () => {
  const handleSubmit = () => {
    history.push('/quest')
  }
  return (
    <div className='wrapper-container'>
      <Header color='#fff' teamName='Кузнечики' />
      <div className='next-quest'>
        <h2 className="next-quest__title">Загадка №2</h2>
        <div className="next-quest__btn" onClick={handleSubmit}>Начать</div>
      </div>
    </div>
  )
}

export default NextQuest