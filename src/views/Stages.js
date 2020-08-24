import React, { useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Modal from '../components/Modal'
import Navigation from '../components/Navigation'
import ensureAuthorized from '../hocs/ensureAuthorized'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { uploadAddtitionalPhoto, fetchPhotoTasks } from '../redux/team/actions'

const Stages = ({ team, uploadAddtitionalPhoto, fetchPhotoTasks, photoTasks }) => {
  const [visible, setVisible] = useState(false)
  const [activeId, setActiveId] = useState(false)

  useState(() => {
    fetchPhotoTasks();
  }, [])

  const handleChange = (e) => {
    setVisible(!visible)
    if (e.target.files.length > 0 && activeId) {
      const tasks = team.phototask;
      tasks.push({ question: activeId })

      console.log(tasks)
      const data = {
        phototask: tasks
      }

      setActiveId(false);

      // uploadPuzzlePhoto(null, activeQuestionIndex, data)
      uploadAddtitionalPhoto(e.target.files[0], tasks.length - 1, data);
    }
  }
  const handleClick = () => {
    setVisible(!visible)
  }
  const requiredTasks = photoTasks.filter((t) => { return t.answer === 'required' })
  const optionalTasks = photoTasks.filter((t) => { return t.answer !== 'required' })

  return (
    <div className='wrapper-container'>
      <Modal isVisible={visible} handleClick={handleClick} handleChange={handleChange} />
      <Header color='#fff' />
      <div className='stages'>
        <h5 className='stages__title'>Обязательные фото (за невыполнение штраф 3 минуты):</h5>
        <div className="stages__primary">
          {requiredTasks.map((t) => {
            return <Card key={t.id} text={t.question} handleClick={() => { handleClick(); setActiveId(t.id) }} isChecked={team.phototask.find((v) => { return v.question.id === t.id })} />
          })}
        </div>
        <h5 className="stages__title">Дополнительные фото (бонус -1 минута):</h5>
        <div className="stages__secondary">
          {optionalTasks.map((t) => {
            return <Card key={t.id} text={t.question} handleClick={() => { handleClick(); setActiveId(t.id) }} isChecked={team.phototask.find((v) => { return v.question.id === t.id })} />
          })}
        </div>
      </div>
      <Navigation />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    team: state.teams.myTeam,
    photoTasks: state.teams.photoTasks,
  }
}

export default compose(
  ensureAuthorized,
  connect(mapStateToProps, { uploadAddtitionalPhoto, fetchPhotoTasks })
)(Stages)