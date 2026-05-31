import React from 'react'

export default function ContactForm() {
    return (
        <section className='contactform'>
            <div className="contactform__container container">
                <h1 className="contactform__title">
                    Contact Us
                </h1>
                <p className="contactform__descr">
                    We consider all the drivers of change gives you the components <br/> you need to change to create a truly happens.
                </p>
                <form className="contactform__form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Enter your name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter email address" />
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" placeholder="Write a subject" />
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Write your message"></textarea>
                    </div>

                    <button type="submit" className="form-submit">Send</button>
                </form>
                <div className="contact-info">
                <div className="contact-info__item">
                    <h3>Call Us:</h3>
                    <p className="highlight">+1-234-567-8900</p>
                </div>

                <div className="contact-info__item">
                    <h3>Hours:</h3>
                    <p>Mon-Fri: 11am — 8pm</p>
                    <p>Sat, Sun: 9am — 10pm</p>
                </div>

                <div className="contact-info__item">
                    <h3>Our Location:</h3>
                    <p>123 Bridge Street <br /> Nowhere Land, LA 12345 <br /> United States</p>
                </div>
                </div>
            </div>
        </section>
    )
}
