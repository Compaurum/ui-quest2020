import React from "react"
import { Link } from 'react-router-dom';
// иконки подбирал не лету можно заменить :)
import app from "../../assets/icons/app.svg"
import tea from "../../assets/icons/tea.svg"
import help from "../../assets/icons/help.svg"
import "./navigation.scss"

const Navigation = () => {
  return (
    <div className="navigation">
      <Link className="navigation__button" to="/quest">
        <img src={tea} alt="quest start button" className="navigation__icon" />
        Квест
      </Link>
      <Link className="navigation__button" to='/stages'>
        <img src={app} alt="Visual chalenge button" className="navigation__icon" />
        Фотозадания
      </Link>
      <Link className="navigation__button active" to='/help'>
        {/* <a href="#" className="navigation__button active"> */}
        <img src={help} alt="help button" className="navigation__icon" />
        Справка
        </Link>
    </div>
  )
}

export default Navigation