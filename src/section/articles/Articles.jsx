import React from 'react'
import Button from '../../components/button/Button'
import articles1 from '../../assets/articles1.png'
import articles2 from '../../assets/articles2.png'
import articles3 from '../../assets/articles3.png'
import articles4 from '../../assets/articles4.png'
import articles5 from '../../assets/articles5.png'
import ArticlesCard from '../../components/cards/articlescard/ArticlesCard'

const articlesItem = [
    {
        id: 1,
        image: articles1,
        date: 'January 3, 2023',
        title: 'The secret tips & tricks to prepare a perfect burger & pizza for our customers',
        descr: 'Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.'
    },
    {
        id: 2,
        image: articles2,
        date: 'January 3, 2023',
        title: 'How to prepare the perfect french fries in an air fryer',
    },
    {
        id: 3,
        image: articles3,
        date: 'January 3, 2023',
        title: 'How to prepare delicious chicken tenders',
    },
    {
        id: 4,
        image: articles4,
        date: 'January 3, 2023',
        title: '7 delicious cheesecake recipes you can prepare',
    },
    {
        id: 5,
        image: articles5,
        date: 'January 3, 2023',
        title: '5 great pizza restaurants you should visit this city',
    },
];

export default function Articles() {
    return (
        <section className='articles'>
            <div className="articles__container container">
                <div className="articles__row">
                    <h2 className="articles__title">
                        Our Blog & Articles
                    </h2>
                    <Button
                        href="/all-articles"
                        className='articles__btn'
                    >
                        Read All Articles

                    </Button>
                </div>
                <div className="artcilescard__row">
                <ul className="articles__list list-reset">
                    {articlesItem.map((item) => (
                        <li key={item.id} className='articles__item'>
                            <ArticlesCard
                                image={item.image}
                                date={item.date}
                                title={item.title}
                                descr={item.descr}
                            />
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        </section>
    )
}
