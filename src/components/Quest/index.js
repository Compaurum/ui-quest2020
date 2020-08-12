import React from "react"

import "./quest.scss"

const Quest = () => {
  
  return (
    <div className="quest">
      <div className="quest__levels">
        <a href="#" className="quest__level">&nbsp;</a>
        <a href="#" className="quest__level">&nbsp;</a>
        <a href="#" className="quest__level">&nbsp;</a>
        <a href="#" className="quest__level">&nbsp;</a>
        <a href="#" className="quest__level active">&nbsp;</a>
        <a href="#" className="quest__level">&nbsp;</a>
        <a href="#" className="quest__level">&nbsp;</a>
        <a href="#" className="quest__level">&nbsp;</a>
        <a href="#" className="quest__level">&nbsp;</a>
        <a href="#" className="quest__level">&nbsp;</a>
      </div>
      <div className="quest__info">
        <div className="quest__question">Какой формы Земля?</div>
        <div className="quest__hint-timer">Время до подсказки 03:27</div>
        <div className="quest__hint">Это не квадрат</div>
        <div className="quest__line"></div>
        <div className="quest__hint">Подсказка 2</div>
        <form className="quest__form">
          <input type="text" placeholder="Введите код" className="quest__input"/>
          <input type="submit" className="quest__btn" value="Загрузить"/>
        </form>
        <div className="quest__alert">Загрузите картинку!</div>
        <button className="quest__btn quest__submit">Отправить</button>
      </div>
    </div>
  )
}

export default Quest