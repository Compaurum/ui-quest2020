import React from 'react'
import Header from '../components/Header'
import './global.scss'

const SpecialQuest = () => {
  return (
    <div className='wrapper-container'>
      <Header color='#fff' teamName='Кузнечики'/>
      <div className='special-content'>
        <h2 className='special-content__title'>Спецзадание</h2>
        <p className='special-content__text'>
          Неподалеку от вас находиться один из организаторов.
          Найдите его и он обьяснит, что необходимо делать дальше.
          ПОСЛЕ выполнения спецзадания, нажмите на кнопку "Выполнено",
          чтобы открыть следующюю загадку.
        </p>
        <a href='/next' className='special-content__btn'>Выполнено</a>
      </div>
    </div>
  )
}

export default SpecialQuest