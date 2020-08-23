import React, {useState} from 'react'
import './Card.scss'
import check from '../../assets/icons/check.svg'

const Card = ({text, handleClick}) => {
  const [checked, setCheck] = useState(false)

  const userClick = () => {
    setCheck(!checked)
    handleClick()
  }

  return (
    <div className='card' onClick={userClick}>
      <p className='card__text'>{text}</p>
      <div className="card__icon">
        {checked ? 
        <img src={check} alt="checkbox"/> 
        : <div className="card__unchecked"></div>}
      </div>
    </div>
  )
}

export default Card