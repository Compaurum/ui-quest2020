import React from 'react'
import './Modal.scss'

const Modal = ({isVisible, handleClick}) => {
  const userClick = () => {
    document.getElementById('modal__upload').click()
  }
  
  return (
    isVisible && <div className='modal' onClick={handleClick}>
      <div className="modal__content">
        <form className="modal__form">
          <input type="file" id="modal__upload" />
          <button className='modal__btn' onClick={userClick}>Выбрать фото и загрузить</button>
        </form>
      </div>
    </div>
  )
}

export default Modal