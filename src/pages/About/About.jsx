import React from 'react'

export default function About() {
  return (
    <section className='about'>
        <div className="about__container container">
            <h2 className="about__title">
                Why We are Best Food Maker
            </h2>
            <p className="about__descr">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br/> scrambled it to make a type specimen book.
            </p>
            <div className="about__row">
                <div className="about__left">
                    <span className='about__text'>
                        It is a long established fact that a reader will be distracted layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The normal distribution of letters, as opposed to using 'Content  Many desktop publishing packages and web page editors search for 'lorem ipsum' will uncover many web sites still in  humour and the like. <button className='about__read'>Read More</button>
                    </span>
                </div>
                <div className="about__right">
                    <iframe width="560" height="410" src="https://www.youtube.com/embed/6OAvQj9vlp0?si=tYgltk4wJYbPh4gd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}
