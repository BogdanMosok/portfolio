import React from 'react'

const ServiceCard = ({
  title,
  descr,
  image,
  imageBoxClass,
  descrClass,
  titleClass,
  imageClass,
  servicecardClass
}) => (
  <div className={`servicecard ${servicecardClass || ''}`}>
    <div className={`servicecard__image-box ${imageBoxClass || ''}`}>
    <img 
        className={`servicecard__image ${imageClass || ''}`} 
        src={image} 
        alt={title} 
      />
    </div>
    <h3 className={`servicecard__title ${titleClass || ''}`}>
      {title}
    </h3>

    <p className={`servicecard__descr ${descrClass || ''}`}>
      {descr}
    </p>

  </div>
);

export default ServiceCard; 