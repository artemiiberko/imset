import React from "react"
import "./styles/own.scss"
import icon1 from "./img/ownpakiet/icon_1.png"
import icon2 from "./img/ownpakiet/icon_2.png"
import icon3 from "./img/ownpakiet/icon_3.png"
import icon4 from "./img/ownpakiet/icon_4.png"
import plus from "./img/ownpakiet/plus.png"

const Own = () => {
  return (
    <div className="own">
      <h1>Stwórz swój własny pakiet</h1>
      <h2> telewizja - internet - telefon</h2>
      <div className="own__options">
        <div className="own__options__item">
          <img className="own__options__item__icon" alt="icon" src={icon1} />
          <p>
            wybierz <span>ulubione kanały tv</span>
          </p>
        </div>
        <img className="own__options__plus" alt="icon" src={plus} />
        <div className="own__options__item">
          <img className="own__options__item__icon" alt="icon" src={icon2} />
          <p>
            wybierz <span>prędkość internetu</span>
          </p>
        </div>
        <img className="own__options__plus" alt="icon" src={plus} />
        <div className="own__options__item">
          <img className="own__options__item__icon" alt="icon" src={icon3} />
          <p>
            wybierz <span>ilość minut na rozmowy</span>
          </p>
        </div>
        <img className="own__options__plus" alt="icon" src={plus} />
        <div className="own__options__item">
          <img className="own__options__item__icon" alt="icon" src={icon4} />
          <p>
            wybierz <span>internet mobilny</span>
          </p>
        </div>

        <div className="own__options__titles"></div>
      </div>
      <div className="own__decision">
        <button>Stwórz pakiet</button>
        <p>lub wybierz pakiet, przygotowany przez nas</p>
      </div>
    </div>
  )
}

export default Own
