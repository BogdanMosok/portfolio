import React from 'react'
import Button from '../../button/Button';

const CategoryCard = ({
  title,
  subtitle,
  btnText,
  image,
  imageBoxClass,
  ButtonBoxClass,
  titleClass,
  imageClass,
  subtitleClass,
  buttonClass,
  cardClass
}) => (
  <div className={`card ${cardClass || ''}`}>
    <div className={`card__image-box ${imageBoxClass || ''}`}>
    <img 
        className={`card__image ${imageClass || ''}`} 
        src={image} 
        alt={title} 
      />
    </div>
    <h3 className={`card__title ${titleClass || ''}`}>
      {title}
    </h3>

    <p className={`card__subtitle ${subtitleClass || ''}`}>
      {subtitle}
    </p>
    <div className={`card__button-box ${ButtonBoxClass || ''}`}>
    <Button className={`card__button ${buttonClass || ''}`}>
      {btnText}
    </Button>
    </div>
  </div>
);

export default CategoryCard; 