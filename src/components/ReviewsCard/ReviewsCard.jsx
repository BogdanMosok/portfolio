import React from 'react'
import Reviews from '../../pages/Reviews/Reviews'
import avatar1 from '../../assets/Avater1.png'
import avatar2 from '../../assets/Avater2.png'
import avatar3 from '../../assets/Avater3.png'

export default function ReviewsCard() {
  return (
    <section className='reviews'>
      <div className="reviews__container container">
        {/* Заголовок теперь здесь — один на всю страницу */}
        <h2 className="reviews__title">
          What Our Clients Are Saying
        </h2>
        
        {/* Обертка для карточек, чтобы они стояли в ряд */}
        <div className="reviews__wrapper">
          <Reviews
            image={avatar1}
            name="Michal Gun"
            descr="Head of sales at Tesla"
            star="⭐⭐⭐⭐⭐"
            decor="“"
            subtitle="There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."
          />
          <Reviews
            image={avatar2}
            name="Aleena White"
            descr="Accountant of Ozone"
            star="⭐⭐⭐⭐⭐"
            decor="“"
            subtitle="There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."
          />
        <Reviews
            image={avatar3}
            name="Cries Lee"
            descr="CEO Of Montee"
            star="⭐⭐⭐⭐⭐"
            decor="“"
            subtitle="There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."
          />
                    <Reviews
            image={avatar1}
            name="Michal Gun"
            descr="Head of sales at Tesla"
            star="⭐⭐⭐⭐⭐"
            decor="“"
            subtitle="There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."
          />
          <Reviews
            image={avatar2}
            name="Aleena White"
            descr="Accountant of Ozone"
            star="⭐⭐⭐⭐⭐"
            decor="“"
            subtitle="There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."
          />
        <Reviews
            image={avatar3}
            name="Cries Lee"
            descr="CEO Of Montee"
            star="⭐⭐⭐⭐⭐"
            decor="“"
            subtitle="There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."
          />
        </div>
      </div>
    </section>
  )
}