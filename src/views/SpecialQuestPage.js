import React from 'react'
import Header from '../components/Header'
import SpecialQuest from '../components/SpecialQuest'
import image from '../assets/images/logo-medium.jpg'
import './global.scss'

let text = `Неподалеку от вас находиться один из организаторов.
Найдите его и он обьяснит, что необходимо делать дальше.
ПОСЛЕ выполнения спецзадания, нажмите на кнопку "Выполнено",
чтобы открыть следующюю загадку.`

const SpecialQuestPage = () => {
  return (
    <div className='wrapper-container'>
      <Header color='#fff' teamName='Кузнечики'/>
      <SpecialQuest text={text} image={image}/>
    </div>
  )
}

export default SpecialQuestPage