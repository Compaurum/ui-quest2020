import React from "react"
import { store, history } from '../../redux/store';
import _ from 'lodash';
import { API_URL } from '../../services/HttpService';
import "./Header.scss"

Number.prototype.toHHMMSS = function () {
  var sec_num = this; // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours < 10) { hours = "0" + hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }
  return hours + ':' + minutes + ':' + seconds;
}

const Header = ({ color }) => {
  const teamName = _.get(store.getState(), 'teams.myTeam.name', '');
  const teamAvatar = _.get(store.getState(), 'teams.myTeam.avatar.url', '');
  console.log(teamAvatar);
  // "/uploads/super_gopher_cafefab6b6.png"
  const progress = _.get(store.getState(), 'teams.myTeam.progress', [])
  let timer = 0;
  progress.map((p) => {
    timer += p.endTime - p.startTime
  })

  return (
    <div className="header" style={timer ? null : { justifyContent: "start" }}>
      <div className="header__circle" style={{ backgroundColor: color }}>
        <img className="header__image" src={API_URL + teamAvatar} />
      </div>
      <div className="header__team-name">{teamName}</div>
      {<div className="header__timer">{timer.toHHMMSS()}</div>}
    </div>
  )
}

export default Header