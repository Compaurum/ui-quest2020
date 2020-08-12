import React from "react"

import "./Header.scss"

const Header = ({teamName, timer, color}) => {
  return (
    <div className="header" style={timer ? null : {justifyContent: "start"}}>
      <div className="header__circle" style={{backgroundColor: color}}></div>
      <div className="header__team-name">{teamName}</div>
      {timer && <div className="header__timer">24:34</div>}
    </div>
  )
}

export default Header