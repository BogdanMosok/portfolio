import React from 'react';
import features1 from '../../assets/features1.png';
import features2 from '../../assets/features2.png';
import features3 from '../../assets/features3.png';

export default function Features() {
    return (
        <section className="features">
            <div className="features__container container">
                
                <div className="features__images">
                    <img 
                        src={features1} 
                        alt="Our professional chef" 
                        className="features__img features__img--large" 
                    />
                    <div className="features__image-group">
                        <img src={features2} alt="Delicious shrimp dish" className="features__img" />
                        <img src={features3} alt="Grilled meat and vegetables" className="features__img" />
                    </div>
                </div>

                <div className="features__info">
                    <h2 className="features__title">
                        Fastest Food Delivery in City
                    </h2>
                    
                    <p className="features__descr">
                        Our visual designer lets you quickly and of drag a down <br /> 
                        your way to customapps for both keep desktop.
                    </p>

                    <ul className="features__list list-reset">
                        <li className="features__item">
                            <span className="features__item-text features__icon-clock">
                                Delivery within 30 minutes
                            </span>
                        </li>
                        <li className="features__item">
                            <span className="features__item-text features__icon-offer">
                                Best Offer & Prices
                            </span>
                        </li>
                        <li className="features__item">
                            <span className="features__item-text features__icon-card">
                                Online Services Available
                            </span>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
}