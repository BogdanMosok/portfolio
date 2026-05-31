import React from 'react'
import kebabsettable1 from '../../assets/kebabsettable1.png'
import birthday1 from '../../assets/birthday1.png'
import Weddings1 from '../../assets/Weddings1.png'
import Events1 from '../../assets/Events1.png'
import ServiceCard from '../../components/cards/servicecard/ServiceCard'

const OffersItem = [
    {
        id: 1,
        title: 'Caterings',
        descr: 'In the new era of technology we look \n in the future with certainty for life.',
        image: kebabsettable1
    },
    {
        id: 2,
        title: 'Birthdays',
        descr: 'In the new era of technology we look \n in the future with certainty for life.',
        image: birthday1
    },
    {
        id: 3,
        title: 'Weddings',
        descr: 'In the new era of technology we look \n in the future with certainty for life.',
        image: Weddings1
    },
    {
        id: 4,
        title: 'Events',
        descr: 'In the new era of technology we look \n in the future with certainty for life.',
        image: Events1
    }
]



export default function OffersSectionHome() {
  return (
    <section className='offerssectionhome'>
        <div className="offerssectionhome__container container">
            <h2 className="offerssectionhome__title">
                We also offer unique <br/>services for your events
            </h2>
            <ul className="offerssectionhome__list list-reset">
                    {OffersItem.map((item) => (
                        <li key={item.id} className='offerssectionhome__item'>
                            <ServiceCard
                               image={item.image}
                               title={item.title}
                               descr={item.descr}
                               titleClass="offerssectionhome__card-title"
                               descrClass="offerssectionhome__card-descr"
                               imageClass="offerssectionhome__card-image"
                            />
                        </li>
                    ))}
            </ul>
        </div>
    </section>
  )
}
