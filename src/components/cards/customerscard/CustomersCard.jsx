import React from 'react'

const CustomersCard = ({
    title,
    descr,
    image,
    subtitle,
    subdescr,
    titleClass,
    descrClass,
    imageClass,
    subtitleClass,
    subdescrClass,
    customerscardClass ,
    imageBoxClass,
    customerscard__line,
    customerscard_Info,
    InfoClass,
    lineClass
}) => {
  return (
     <div className={`customerscard ${customerscardClass || ''}`}>
    <h3 className={`customerscard__title ${titleClass || ''}`}>
      {title}
    </h3>
    <p className={`customerscard__descr ${descrClass || ''}`}>
      {descr}
    </p>
    <div className={`customerscard__line ${lineClass || ''}`}>
    </div>
       <div className={`customerscard__image-box ${imageBoxClass || ''}`}>
    <img 
        className={`customerscard__image ${imageClass || ''}`} 
        src={image} 
        alt={title} 
      />
    <div  className={`customerscard_Info ${InfoClass || ''}`}>
    <h4 className={`customerscard__subtitle ${subtitleClass || ''}`}>
      {subtitle}
    </h4>
    <p className={`customerscard__descr ${subdescrClass || ''}`}>
      {subdescr}
    </p>
    </div>
    </div>
  </div>
  )
}

export default CustomersCard