import React from 'react'
import Testimonialsavatar1 from '../../assets/Testimonialsavatar1.png'
import Testimonialsavatar2 from '../../assets/Testimonialsavatar2.png'
import Testimonialsavatar3 from '../../assets/Testimonialsavatar3.png'
import CustomersCard from '../../components/cards/customerscard/CustomersCard';

const  TestimonialsItem = [
    {
        id: 1,
        title: '“The best restaurant”',
        descr: 'Last night, we dined at place and were \n simply blown away. From the moment we \n stepped in, we were enveloped in an \n inviting atmosphere and greeted with \n warm smiles.',
        image: Testimonialsavatar1,
        subtitle: 'Sophire Robson',
        subdescr: 'Los Angeles, CA',
    },
    {
        id: 2,
        title: '“Simply delicious”',
        descr: 'Place exceeded my expectations on all \n fronts. The ambiance was cozy and \n relaxed, making it a perfect venue for our \n anniversary dinner. Each dish was \n prepared and beautifully presented.',
        image: Testimonialsavatar2,
        subtitle: 'Matt Cannon',
        subdescr: 'San Diego, CA',
    },
        {
        id: 3,
        title: '“One of a kind restaurant”',
        descr: 'The culinary experience at place is first \n to none. The atmosphere is vibrant, the \n food - nothing short of extraordinary. The \n food was the highlight of our evening. \n Highly recommended.',
        image: Testimonialsavatar3,
        subtitle: 'Andy Smith \n',
        subdescr: 'San Francisco, CA',
    },
];


export default function TestimonialsSection() {
  return (
    <section className='testimonialssection'>
        <div className="testimonialssection__container container">
            <h2 className="testimonialssection__title">What Our Customers Say</h2>
            <p className="testimonialssection__descr">We consider all the drivers of change gives you the components <br/> you need to change to create a truly happens.</p>
            <div className="testimonialssection__card">
                <ul className="testimonialssection__list list-reset">
                        {TestimonialsItem.map((item) => (
                            <li className='testimonialssection__item' key={item.id}>
                                <CustomersCard
                                    title={item.title}
                                    descr={item.descr}
                                    image={item.image}
                                    subtitle={item.subtitle}
                                    subdescr={item.subdescr}
                                    titleClass="testimonialssection__card-title"
                                    subtitleClass="testimonialssection__card-subtitle"
                                    descrClass="testimonialssection__card-descr"
                                    subdescrClass="testimonialssection__card-subdescr"
                                    imageClass= "testimonialssection__card-image"
                                    imageBoxClass="testimonialssection__card-image-box"
                                    cardClass="testimonialssection__item"
                                />
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    </section>
  )
}
