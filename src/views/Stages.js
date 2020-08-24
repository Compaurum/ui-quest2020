import React, { useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Modal from '../components/Modal'
import Navigation from '../components/Navigation'

const Stages = () => {
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(!visible)
  }

  return (
    <div className='wrapper-container'>
      <Modal isVisible={visible} handleClick={handleClick} />
      <Header color='#fff' />
      <div className='stages'>
        <h5 className='stages__title'>Обязательные фото (за невыполнение штраф 3 минуты):</h5>
        <div className="stages__primary">
          <Card text='Слово КВЕСТ из учасников команды' handleClick={handleClick} isVisible={visible} />
          <Card text='5 людей - 5 эмоций (удивление, восхищение, радость, воодушевленность, решительность).'
            handleClick={handleClick}
            isVisible={visible}
          />
        </div>
        <h5 className="stages__title">Дополнительные фото (бонус -1 минута):</h5>
        <div className="stages__secondary">
          <Card text='20% скидки' handleClick={handleClick} isVisible={visible} />
          <Card text='Знак стоп' handleClick={handleClick} isVisible={visible} />
          <Card text='Клен' handleClick={handleClick} isVisible={visible} />
          <Card text='Желтая обувь' handleClick={handleClick} isVisible={visible} />
          <Card text='Лежащий полицейский' handleClick={handleClick} isVisible={visible} />
          <Card text='Флаг Украины' handleClick={handleClick} isVisible={visible} />
          <Card text='BMW' handleClick={handleClick} isVisible={visible} />
          <Card text='Фото "Мемориальной таблички"' handleClick={handleClick} isVisible={visible} />
          <Card text='Фото "Хаски"' handleClick={handleClick} isVisible={visible} />

        </div>
      </div>
      <Navigation />
    </div>
  )
}

export default Stages