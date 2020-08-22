import React from 'react'
import Header from '../components/Header'

const NextQuest = () => {
  return (
    <div className='wrapper-container'>
      <Header color='#fff' teamName='Кузнечики'/>
      <div className='next-quest'>
        <h2 className="next-quest__title">Загадка №2</h2>
        <a href="/quest" className="next-quest__btn">Начать</a>
      </div>
    </div>
  )
}

export default NextQuest