import React from 'react';
import { history } from '../../redux/store';

const SpecialQuest = ({ text, handler }) => {
  const handleSubmit = () => {
    handler();
    // history.push('/next')
  }

  return (
    <div className='special'>
      <h2 className='special__title'>Спецзадание</h2>
      {text && <p className='special__text'>{text}</p>}
      <div className='special__btn' onClick={handleSubmit}>Выполнено</div>
    </div>
  )
}

export default SpecialQuest