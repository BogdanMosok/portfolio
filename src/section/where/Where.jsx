import React from 'react'
import map from '../../assets/map.svg'

export default function Where() {
  return (
    <section className="where">
    <div className="container grid">
          <div className="where__content">
                <h2 className="where__title">
                    Where we&nbsp;work
                </h2>
                <p className="where__descr">
                    We&rsquo;re expanding. Get in&nbsp;touch and start turning your data into action.
                </p>
                <button className="where__btn btn">Get in touch</button>
          </div>
          <div className="where__map">
            <img src={map} loading="lazy" width="461" height="342" alt="Map" className="where__map-image"/>
          </div>
    </div>
    </section>
  )
}
