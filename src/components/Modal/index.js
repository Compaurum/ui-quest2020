import React from 'react'
import './Modal.scss'

const Modal = ({ isVisible, handleClick, handleChange }) => {
  const userClick = (e) => {
    e.stopPropagation();
    const input = document.getElementById('modal__upload');
    input.value = ''
    input.click();
  }


  return (
    isVisible && <div className='modal' onClick={handleClick} >
      <div className="modal__content">
        <form className="modal__form" onSubmit={(e) => { e.preventDefault() }}>
          <input type="file" id="modal__upload" onChange={handleChange} onClick={(e) => { e.stopPropagation() }} />
          <button className='modal__btn' onClick={userClick}>Выбрать фото и загрузить</button>
        </form>
      </div>
    </div >
  )
}

export default Modal