import React from "react"
import arrowprev from "./img/vod/arrowprev.png"
import arrownext from "./img/vod/arrownext.png"
import "./styles/vod.scss"

const Vod = () => {
  return (
    <div className="vod">
      <img alt="prev" className="vod__arrowPrev" src={arrowprev} />
      <img alt="next" className="vod__arrowNext" src={arrownext} />
    </div>
  )
}

export default Vod
