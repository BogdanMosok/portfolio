import React from 'react';
import Button from '../button/Button';


const HealthFood = ({ image, title, description = [], showButton, contactinfo }) => {
  return (
    <section className='healthfood'>
      <div className="healthfood__container container">
        <div className="healthfood__left">
          <div className="healthfood__image-wrapper">
            <img src={image} alt={title} className="healthfood__img" />
            
            {contactinfo && (
              <div className="healthfood__contacts">
                <h3 className="healthfood__contacts-title">Come and visit us</h3>
                <ul className="healthfood__contacts-list list-reset">
                  <li className="healthfood__contacts-item">
                    <span className="icon">📞</span> {contactinfo.phone}
                  </li>
                  <li className="healthfood__contacts-item">
                    <span className="icon">✉️</span> {contactinfo.email}
                  </li>
                  <li className="healthfood__contacts-item">
                    <span className="icon">📍</span> {contactinfo.address}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="healthfood__right">
          <h2 className="healthfood__title">{title}</h2>
          <div className="healthfood__descr">
             {Array.isArray(description) && description.map((text, index) => (
               <p key={index}>{text}</p>
             ))}
          </div>
          
          {showButton && (
            <div className="healthfood__btn-box">
              <Button className='healthfood__btn'>More About Us</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HealthFood;