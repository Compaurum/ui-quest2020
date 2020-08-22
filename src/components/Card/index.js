import React, {useState} from 'react'
import './Card.scss'
import correct from '../../assets/icons/correct.svg'
import notCorrect from '../../assets/icons/notcorrect.svg'

const Card = ({text, handleClick}) => {
  const [checked, setCheck] = useState(false)

  const userClick = () => {
    setCheck(!checked)
    handleClick()
  }

  return (
    <div className='card' onClick={userClick}>
      <div className="card__icon">
        {checked ? 
        <img src={correct} alt="checkbox"/> 
        : <img src={notCorrect} alt="checkbox"/>}
      </div>
      <p className='card__text'>{text}</p>
    </div>
  )
}

export default Card