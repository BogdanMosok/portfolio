import { useState } from 'react';
import { slides } from './Slider';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);



  const slide = slides[currentSlide];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <p className="hero__subtitle">{slide.subtitle}</p>
            <h1 className="hero__title">{slide.title} <span className="hero__highlight">{slide.highlight}</span></h1>
            <p className="hero__description">{slide.description}</p>
            <button className="hero__btn btn-reset">{slide.btnText}</button>
          </div>

          <img
            src={slide.image}
            alt={slide.title}
            className="hero__image"
          />

          <div className="hero__dots">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`hero__dot ${index === currentSlide ? 'hero__dot--active' : ''} btn-reset`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;