import React from "react"
import phone from "./img/phone.png"
import find from "./img/find.png"
import login from "./img/login.png"
import Burger from "./burger"
import "./styles/navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__content">
        <Burger pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
        <div className="right-side">
          <div className="info">centrum obsługi klienta</div>
          <div className="phone">
            <img alt="" src={phone} />
            <a className="tel" href="tel:800080800">
              800 080 800
            </a>
          </div>
          <div className="find">
            <img alt="" src={find} />
            <a href="#">szukaj</a>
          </div>
          <div className="login">
            <img alt="" src={login} />
            <a href="#">strefa abonanta</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
