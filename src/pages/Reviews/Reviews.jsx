import React from 'react'

export default function Reviews(props) {
  return (
    <div className="reviews__box">
      <div className="reviews__box-info">
        <img src={props.image} alt={props.name} className="reviews__avatar" />
        <div className="reviews__person-content">
          <h3 className="reviews__name">
            {props.name}
          </h3>
          <p className="reviews__descr">
            {props.descr}
          </p>
          <div className="reviews__star">
            {props.star}
          </div>
        </div>
      </div>
      
      {/* Кавычки */}
      <div className="reviews__decor">
        {props.decor}
      </div>
      
      <p className="reviews__subtitle">
        {props.subtitle}
      </p>
    </div>
  )
}