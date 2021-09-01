import React from "react"
import man from "./img/support/man.png"
import icon1 from "./img/support/icon_1.png"
import icon2 from "./img/support/icon_2.png"
import "./styles/support.scss"

const Support = () => {
  return (
    <div className="support">
      <h1>nasz support</h1>
      <h2>propozycje naszego tv-maniaka na weekend</h2>
      <div className="support__main">
        <img alt="" src={man} />
        <div className="support__main__helpme">
          <div className="support__main__helpme__kubafinds">
            <p>zobacz co kuba znalazł ciekawego w tv na weekend</p>
            <img alt="" src={icon1} />
          </div>
          <div className="support__main__helpme__chat">
            <p>podyskutuj z nim o filmach już w piątek 15.09.2014</p>
            <img alt="" src={icon2} />
          </div>
        </div>
      </div>
      <p>
        Zostań naszym ekspertem i poprowadź przedweekendowy chat z użytkownikami
      </p>
    </div>
  )
}

export default Support
