import React from "react"
import "./styles/pakiet20gb.scss"

const Pakiet20gb = () => {
  return (
    <div className="pakiet20gb">
      <h1>Pakiet 20 GB LTE</h1>
      <h2>promocja</h2>
      <p>Dla tych, którzy nie wyobrażają sobie życia bez Internetu:</p>
      <ul>
        <li>oglądaj filmy umieszczone w sieci</li>
        <li>ściągaj duże pliki</li>
        <li>korzystaj z poczty, komunikatora</li>
        <li>sufruj swobodnie</li>
      </ul>
      <div className="pakiet20gb__pakiet">
        <div className="pakiet20gb__pakiet__name">swoboda i mobilność za</div>
        <div className="pakiet20gb__pakiet__price">
          <span>50</span>zł
        </div>
      </div>
    </div>
  )
}

export default Pakiet20gb
