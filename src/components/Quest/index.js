import React, { useState } from "react"
import { connect } from 'react-redux'
import { store, history } from '../../redux/store';
import { API_URL } from '../../services/HttpService';
import { uploadPuzzlePhoto } from '../../redux/team/actions'
import _ from 'lodash';
import { secToTime, timeToSec, nowSec } from '../../utils/time'
import "./quest.scss"

const tenMinutes = 10 * 60;

const Quest = ({ questions, progress, uploadPuzzlePhoto, myTeam }) => {
  const [code, setCode] = useState('')
  const [image, setImage] = useState(null)
  const [wrongCode, setWrongCode] = useState(false);
  const [uploadImageError, setUploadImageError] = useState(false);

  let activeQuestion = null;
  let activeQuestionIndex = -1;
  progress.map((p, index) => {
    if (p.end) {
      questions[index].done = true
    } else if (p.start) {
      questions[index].active = true
      activeQuestion = questions[index]
      activeQuestionIndex = index
    }
  })

  const isPhotoUploaded = _.get(myTeam, `progress[${activeQuestionIndex}].photo`);
  const firstHintTimer = timeToSec(progress[activeQuestionIndex].start) + tenMinutes - nowSec();
  const secondHintTimer = timeToSec(progress[activeQuestionIndex].start) + tenMinutes * 2 - nowSec();
  const timer = firstHintTimer > 0 ? firstHintTimer : secondHintTimer > 0 ? secondHintTimer : 0;

  const textFirstHint = firstHintTimer > 0 ? null : activeQuestion.hint1;
  const textSecondHint = secondHintTimer > 0 ? null : activeQuestion.hint2;
  const imageFirstHint = firstHintTimer > 0 ? null : activeQuestion.hint1picture ? API_URL + activeQuestion.hint1picture.url : '';
  const imageSecondHint = secondHintTimer > 0 ? null : activeQuestion.hint2picture ? API_URL + activeQuestion.hint2picture.url : '';
  const uploadClick = (e) => {
    e.stopPropagation();
    var imagefile = document.getElementById('quest__upload');
    imagefile.value = '';
    imagefile.click()
  }

  const onFileSelected = (e) => {
    if (e.target.files.length > 0) {
      uploadPuzzlePhoto(e.target.files[0], activeQuestionIndex)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit")
    if (code !== activeQuestion.answer) {
      setWrongCode(true)
      return false
    }
    if (!isPhotoUploaded) {
      setUploadImageError(true)
      return false
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
        <form className="quest__form" onSubmit={(e) => { e.preventDefault() }}>
          <input type="text" placeholder="Введите код" className="quest__input" value={code} onChange={(e) => { setCode(e.target.value) }} />
          <input id="quest__upload" type="file" className="quest__btn" onChange={onFileSelected} />
          <button className='quest__btn' onClick={uploadClick}> {isPhotoUploaded ? 'Загрузить фото' : 'Загружено'}</button>
        </form>

        {wrongCode && <div className="quest__alert">Неправильный код!</div>}
        {uploadImageError && <div className="quest__alert">Загрузите картинку!</div>}
        <button className="quest__btn quest__submit" onClick={handleSubmit}>Отправить</button>
      </div>
    </div >
  )
}

const mapStateToProps = (state) => {
  return {
    myTeam: state.teams.myTeam,
  }
}
export default connect(mapStateToProps, { uploadPuzzlePhoto })(Quest)