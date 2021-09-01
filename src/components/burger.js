import React from "react"
import "./styles/burger.scss"
import { slide as Menu } from "react-burger-menu"
import burger from "./img/burger.png"
import icon1 from "./img/menu/icon1.png"
import icon2 from "./img/menu/icon2.png"
import icon3 from "./img/menu/icon3.png"
import icon4 from "./img/menu/icon4.png"

export default (props) => {
  return (
    <Menu customBurgerIcon={<img src={burger} />}>
      <div className="menu-title">paczki i pakiety</div>
      <a className="menu-item" href="/">
        <div className="menu-icon">
          <img alt="" src={icon1} />
        </div>
        <div className="menu-item__title">telewizja</div>
      </a>
      <a className="menu-item" href="/">
        <div className="menu-icon">
          <img alt="" src={icon2} />
        </div>
        <div className="menu-item__title">internet</div>
      </a>
      <a className="menu-item" href="/">
        <div className="menu-icon">
          <img alt="" src={icon3} />
        </div>
        <div className="menu-item__title">telefon</div>
      </a>
      <a className="menu-item" href="/">
        <div className="menu-icon">
          <img alt="" src={icon4} />
        </div>
        <div className="menu-item__title">internet mobilny</div>
      </a>
    </Menu>
  )
}
