import React, { useState } from "react"

import { store, history } from '../../redux/store';
import { API_URL } from '../../services/HttpService';

import "./quest.scss"

const Quest = ({ questions, progress }) => {
  const [code, setCode] = useState('')
  const [image, setImage] = useState(null)
  const [wrongCode, setWrongCode] = useState(false);

  const timer = 0;
  let activeQuestion = null

  progress.map((p, index) => {
    if (p.end) {
      questions[index].done = true
    } else if (p.start) {
      questions[index].active = true
      activeQuestion = questions[index]
    }
  })

  const textFirstHint = activeQuestion.hint1;
  const textSecondHint = activeQuestion.hint2;
  const imageFirstHint = activeQuestion.hint1picture ? API_URL + activeQuestion.hint1picture.url : '';
  const imageSecondHint = activeQuestion.hint2picture ? API_URL + activeQuestion.hint2picture.url : '';
  const handleSubmit = () => {
    if (code !== activeQuestion.answer) {
      setWrongCode(true)
      return
    }
    history.push('/special')
  }

  return (
    <div className="quest">
      <div className="quest__levels">
        {
          questions.map((q) => {
            if (q.done) {
              return <div key={q.id} className="quest__level done">&nbsp;</div>
            } else if (q.active) {
              return <div key={q.id} className="quest__level active">&nbsp;</div>
            }
            return <div key={q.id} className="quest__level">&nbsp;</div>
          })
        }
      </div>
      <div className="quest__info">
        <div className="quest__question">{activeQuestion.question}</div>
        <div className="quest__hint-timer">{`Время до подсказки ${timer.toHHMMSS()}`}</div>
        <div className="quest__hint">
          {(!textFirstHint && !imageFirstHint) && 'Подсказка'}
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
          <input type="text" placeholder="Введите код" className="quest__input" value={code} onChange={(e) => { setCode(e.target.value) }} />
          <input type="submit" className="quest__btn" value="Загрузить" />
        </form>

        {wrongCode && <div className="quest__alert">Неправильный код!</div>}
        <div className="quest__alert">Загрузите картинку!</div>
        <button className="quest__btn quest__submit" onClick={handleSubmit}>Отправить</button>
      </div>
    </div>
  )
}

export default Quest