import React from "react"
import "./styles/now.scss"
import icon from "./img/now/icon.png"
import img from "./img/now/img.png"
import arrowPrev from "./img/now/arrowprev.png"
import arrowNext from "./img/now/arrownext.png"

const Now = () => {
  return (
    <div className="now">
      <div className="now__top">
        <h1>
          teraz
          <br /> w TV online
        </h1>
        <div className="now__top__stat">
          <p>teraz ogląda</p>
          <div className="now__top__stat__count">258</div>
          <img alt="icon" src={icon} />
        </div>
      </div>
      <div className="now__bottom">
        <img className="now__bottom__poster" alt="" src={img} />
        <img className="now__bottom__arrowprev" alt="" src={arrowPrev} />
        <img className="now__bottom__arrownext" alt="" src={arrowNext} />
      </div>
    </div>
  )
}

export default Now
