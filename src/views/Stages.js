import React, { useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Modal from '../components/Modal'
import Navigation from '../components/Navigation'
import ensureAuthorized from '../hocs/ensureAuthorized'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { uploadPuzzlePhoto, fetchPhotoTasks } from '../redux/team/actions'

const Stages = ({ team, uploadPuzzlePhoto, fetchPhotoTasks, photoTasks }) => {
  const [visible, setVisible] = useState(false)

  useState(() => {
    fetchPhotoTasks()
  }, [])

  const handleClick = () => {
    setVisible(!visible)
  }
  const requiredTasks = photoTasks.filter((t) => { return t.answer === 'required' })
  const optionalTasks = photoTasks.filter((t) => { return t.answer !== 'required' })

  return (
    <div className='wrapper-container'>
      <Modal isVisible={visible} handleClick={handleClick} />
      <Header color='#fff' />
      <div className='stages'>
        <h5 className='stages__title'>Обязательные фото (за невыполнение штраф 3 минуты):</h5>
        <div className="stages__primary">
          {requiredTasks.map((t) => {
            return <Card text={t.question} handleClick={handleClick} isVisible={visible} />
          })}
        </div>
        <h5 className="stages__title">Дополнительные фото (бонус -1 минута):</h5>
        <div className="stages__secondary">
          {optionalTasks.map((t) => {
            return <Card text={t.question} handleClick={handleClick} isVisible={visible} />
          })}
          {/* <Card text='20% скидки' handleClick={handleClick} isVisible={visible} />
          <Card text='Знак стоп' handleClick={handleClick} isVisible={visible} />
          <Card text='Клен' handleClick={handleClick} isVisible={visible} />
          <Card text='Желтая обувь' handleClick={handleClick} isVisible={visible} />
          <Card text='Лежащий полицейский' handleClick={handleClick} isVisible={visible} />
          <Card text='Флаг Украины' handleClick={handleClick} isVisible={visible} />
          <Card text='BMW' handleClick={handleClick} isVisible={visible} />
          <Card text='Фото "Мемориальной таблички"' handleClick={handleClick} isVisible={visible} />
          <Card text='Фото "Хаски"' handleClick={handleClick} isVisible={visible} /> */}
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

export default compose(ensureAuthorized, connect(mapStateToProps, { uploadPuzzlePhoto, fetchPhotoTasks }))(Stages)