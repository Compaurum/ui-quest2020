import React from 'react'

const SpecialQuest = ({text, image}) => {
  return (
    <div className='special'>
      <h2 className='special__title'>Спецзадание</h2>
      {text && <p className='special__text'>{text}</p>}
      {image && <img src={image} alt='Картинка подсказка' className='special__img'/>}
      <a href='/next' className='special__btn'>Выполнено</a>
    </div>
  )
}

export default SpecialQuest