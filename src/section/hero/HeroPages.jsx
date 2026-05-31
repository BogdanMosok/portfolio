import React, { useState } from 'react'
import ArticlesCard from '../../components/cards/articlescard/ArticlesCard'
import heropages1 from '../../assets/heropages/heropages1.png'
import heropages2 from '../../assets/heropages/heropages2.png'
import heropages3 from '../../assets/heropages/heropages3.png'
import heropages4 from '../../assets/heropages/heropages4.png'
import heropages5 from '../../assets/heropages/heropages5.png'
import heropages6 from '../../assets/heropages/heropages6.png'
import heropages7 from '../../assets/heropages/heropages7.png'
import heropages8 from '../../assets/heropages/heropages8.png'
import heropages9 from '../../assets/heropages/heropages9.png'
import heropages10 from '../../assets/heropages/heropages10.png'
import heropages11 from '../../assets/heropages/heropages11.png'
import heropages12 from '../../assets/heropages/heropages12.png'

const heropagesItem = [
    {
        id: 1,
        image: heropages1,
        date: 'January 3, 2023',
        title: 'How to prepare a delicious gluten free sushi',
    },
    {
        id: 2,
        image: heropages2,
        date: 'January 3, 2023',
        title: 'Exclusive baking lessons from the pastry king',
    },
    {
        id: 3,
        image: heropages3,
        date: 'January 3, 2023',
        title: 'How to prepare the perfect fries in an air fryer',
    },
    {
        id: 4,
        image: heropages4,
        date: 'January 3, 2023',
        title: 'How to prepare delicious chicken tenders',
    },
    {
        id: 5,
        image: heropages5,
        date: 'January 3, 2023',
        title: '5 great cooking gadgets you can buy to save time',
    },
    {
        id: 6,
        image: heropages6,
        date: 'January 3, 2023',
        title: 'The secret tips & tricks to prepare a perfect burger',
    },
    {
        id: 7,
        image: heropages7,
        date: 'January 3, 2023',
        title: '7 delicious cheesecake recipes you can prepare',
    },
    {
        id: 8,
        image: heropages8,
        date: 'January 3, 2023',
        title: '5 great pizza restaurants you should visit this city',
    },
    {
        id: 9,
        image: heropages9,
        date: 'January 3, 2023',
        title: '5 great cooking gadgets you can buy to save time',
    },
    {
        id: 10,
        image: heropages10,
        date: 'January 3, 2023',
        title: 'How to prepare a delicious gluten free sushi',
    },
    {
        id: 11,
        image: heropages11,
        date: 'January 3, 2023',
        title: 'Top 20 simple and quick desserts for kids',
    },
    {
        id: 12,
        image: heropages12,
        date: 'January 3, 2023',
        title: 'Top 20 simple and quick desserts for kids',
    },
];

export default function HeroPages() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section className="heropages">
      <div className="container">

        {selectedArticle ? (
          <div className="article-detail">
            <button 
              className="article-detail__back"
              onClick={() => setSelectedArticle(null)}
            >
              back
            </button>

            <h1 className="article-detail__title">
              {selectedArticle.title}
            </h1>

            <img 
              className="article-detail__image"
              src={selectedArticle.image} 
              alt="" 
            />

            <p className="article-detail__date">
              {selectedArticle.date}
            </p>

            <p className="article-detail__text">
              {selectedArticle.content}
            </p>
          </div>

        ) : (
          <>
            <h1 className="heropages__title">
              Our Blog & Articles
            </h1>

            <ul className="heropages__list list-reset">
              {heropagesItem.map((item) => (
                <li key={item.id}>
                  <ArticlesCard
                    image={item.image}
                    date={item.date}
                    title={item.title}
                    onClick={() => setSelectedArticle(item)}
                  />
                </li>
              ))}
            </ul>
          </>
        )}

      </div>
    </section>
  );
}