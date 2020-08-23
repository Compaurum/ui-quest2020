import React from "react"
import { store, history } from '../../redux/store';
import _ from 'lodash';
import { API_URL } from '../../services/HttpService';
import "./Header.scss"
import { timeToSec, secToTime } from '../../utils/time';

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
  // "/uploads/super_gopher_cafefab6b6.png"
  const progress = _.get(store.getState(), 'teams.myTeam.progress', [])
  let timer = 0;
  let continueTimer = false;
  progress.map((p) => {
    if (!p.start && !p.finish) {
      return
    }
    const start = timeToSec(p.start);
    if (!p.finish) {
      const now = new Date();
      var nowSec = now.getSeconds() + (60 * now.getMinutes()) + (60 * 60 * now.getHours());
      timer += nowSec - start;

      continueTimer = true;
    } else {
      const finish = timeToSec(p.finish);
      timer += finish - start;
    }
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