import React from 'react';
import CategoryCard from '../../components/cards/categorycard/CategoryCard';
import tea1 from '../../assets/tea1.svg';
import icec1 from '../../assets/icec1.svg';
import drinks from '../../assets/drinks.svg';
import dessert from '../../assets/dessert.svg';

const categoriesMenu = [
  { 
    id: 1, 
    title: 'Breakfast', 
    image: tea1, 
    subtitle: 'In the new era of technology we \n look in the future with certainty \n and pride for our life.', 
    btnText: 'Explore Menu' 
  },
  { 
    id: 2, 
    title: 'Main Dishes', 
    image: icec1, 
    subtitle: 'In the new era of technology we \n look in the future with certainty \n and pride for our life.', 
    btnText: 'Explore Menu' 
  },
  { 
    id: 3, 
    title: 'Drinks', 
    image: drinks, 
    subtitle: 'In the new era of technology we \n look in the future with certainty \n and pride for our life.', 
    btnText: 'Explore Menu' 
  },
  { 
    id: 4, 
    title: 'Dessert', 
    image: dessert, 
    subtitle: 'In the new era of technology we  \n look in the future with certainty \n and pride for our life.', 
    btnText: 'Explore Menu' 
  }
];

export default function BrowseSection() {
  return (
    <section className="browsesection">
      <div className="browsesection__container container">
        <h2 className="browsesection__title">
          Browse Our Menu
        </h2>
        <div className="browsesection__card">
          <ul className="browsesection__list list-reset">
            {categoriesMenu.map((item) => (
              <li className="browsesection__item" key={item.id}>
                <CategoryCard
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  btnText={item.btnText}
                  imageBoxClass="browsesection__card-image-box"
                  titleClass="browsesection__card-title"
                  ButtonBoxClass="browsesection__card-button-box"
                  subtitleClass="browsesection__card-subtitle"
                  buttonClass="browsesection__card-button"
                  imageClass= "browsesection__card-image"
                  cardClass="browsesection__item"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}