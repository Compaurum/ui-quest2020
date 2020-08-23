import React from "react"

import { store, history } from '../../redux/store';

import "./quest.scss"

const Quest = ({ textSecondHint, imageSecondHint, imageFirstHint, textFirstHint }) => {

  const timer = 0;
  const handleSubmit = () => {
    history.push('/special')
  }
  return (
    <div className="quest">
      <div className="quest__levels">
        <a href="#" className="quest__level done">&nbsp;</a>
        <a href="#" className="quest__level done">&nbsp;</a>
        <a href="#" className="quest__level done">&nbsp;</a>
        <a href="#" className="quest__level done">&nbsp;</a>
        <a href="#" className="quest__level active">&nbsp;</a>
        <a href="#" className="quest__level">&nbsp;</a>
        <a href="#" className="quest__level">&nbsp;</a>
        <a href="#" className="quest__level">&nbsp;</a>
        <a href="#" className="quest__level">&nbsp;</a>
        <a href="#" className="quest__level">&nbsp;</a>
      </div>
      <div className="quest__info">
        <div className="quest__question">Какой формы Земля?</div>
        <div className="quest__hint-timer">{`Время до подсказки ${timer.toHHMMSS()}`}</div>
        <div className="quest__hint">
          {(!textSecondHint && !imageSecondHint) && 'Подсказка'}
          {textFirstHint && textFirstHint}
          {imageFirstHint && <img src={imageFirstHint} alt="Подсказка" />}
        </div>
        <div className="quest__line"></div>
        <div className="quest__hint">
          {(!textSecondHint && !imageSecondHint) && 'Подсказка 2'}
          {textSecondHint && textSecondHint}
          {imageSecondHint && <img src={imageSecondHint} alt="Подсказка" />}
        </div>
        <form className="quest__form">
          <input type="text" placeholder="Введите код" className="quest__input" />
          <input type="submit" className="quest__btn" value="Загрузить" />
        </form>
        <div className="quest__alert">Загрузите картинку!</div>
        <button className="quest__btn quest__submit" onClick={handleSubmit}>Отправить</button>
      </div>
    </div>
  )
}

export default Quest