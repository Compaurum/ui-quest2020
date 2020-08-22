import React from "react"

// иконки подбирал не лету можно заменить :)
import app from "../../assets/icons/app.svg"
import tea from "../../assets/icons/tea.svg"
import help from "../../assets/icons/help.svg"
import "./navigation.scss"

const Navigation = () => {
  return (
    <div className="navigation">
      <a href="#" className="navigation__button">
        <img src={tea} alt="quest start button" className="navigation__icon"/>
        Квест
      </a>
      <a href="#" className="navigation__button">
        <img src={app} alt="Visual chalenge button" className="navigation__icon"/>
        Фотозадания
      </a>
      <a href="#" className="navigation__button active">
        <img src={help} alt="help button" className="navigation__icon"/>
        Справка
      </a>
    </div>
  )
}

export default Navigation