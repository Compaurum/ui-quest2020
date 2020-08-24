import React from 'react'
import Header from '../components/Header'
import SpecialQuest from '../components/SpecialQuest'
import './global.scss'
import { compose } from 'redux'
import ensureAuthorized from '../hocs/ensureAuthorized'
import { connect } from 'react-redux'
import { store, history } from '../redux/store'
import { uploadPuzzlePhoto } from '../redux/team/actions';
import { secToTime, nowSec } from '../utils/time';

let text = `Неподалеку от вас находиться один из организаторов.
Найдите его и он обьяснит, что необходимо делать дальше.
ПОСЛЕ выполнения спецзадания, нажмите на кнопку "Выполнено",
чтобы открыть следующюю загадку.`

const SpecialQuestPage = ({ team, uploadPuzzlePhoto }) => {
  if (team.roads.length === team.progress.length) {
    history.push('/ending')
    return <></>
  }
  if (team.roads[team.progress.length].type === 'puzzle') {
    history.push('/quest')
    return <></>
  }

  const handler = () => {
    console.log('handled')
    const newProgress = [...team.progress, {
      start: secToTime(nowSec()),
      finish: secToTime(nowSec())
    }]

    const data = {
      progress: newProgress
    }
    uploadPuzzlePhoto(null, -1, data)
  }


  return (
    <div className='wrapper-container'>
      <Header color='#fff' />
      <SpecialQuest text={text} handler={handler} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { team: state.teams.myTeam }
}
export default compose(ensureAuthorized, connect(mapStateToProps, { uploadPuzzlePhoto }))
  (SpecialQuestPage)