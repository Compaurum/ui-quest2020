import React from 'react'

const SpecialQuest = ({text}) => {
  return (
    <div className='special'>
      <h2 className='special__title'>Спецзадание</h2>
      {text && <p className='special__text'>{text}</p>}
      <a href='/next' className='special__btn'>Выполнено</a>
    </div>
  )
}

export default SpecialQuest