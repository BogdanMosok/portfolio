import React from 'react'
import Button from '../../components/Button/Button'

export default function FindUs() {
  return (
    <section className='findus'>
        <div className="findus__container container">
            <div className="findus__row">
                <div className="findus__left">
                    <h2 className="findus__title">Our Restaurants. Where to Find Us?</h2>
                    <p className="findus__descr">Want to have a superb meal in an exceptional setting with family, friends or work colleagues, here are the addresses of our restaurants.</p>
                    <Button>
                        Find The Nearest Cheffest
                    </Button>
                </div>
                <div className="findus__right">
                <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98310.494316734!2d18.690994988764412!3d54.298744847785635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd9e348921e4f1%3A0x83f4b993dd1f95f8!2sPort%20Lotniczy%20Gda%C5%84sk%20im.%20Lecha%20Wa%C5%82%C4%99sy!5e0!3m2!1spl!2spl!4v1771361782520!5m2!1spl!2spl" 
  width="600" 
  height="450" 
 
  style={{ border: 12  }} 

  allowFullScreen="" 
  loading="lazy" 

  referrerPolicy="no-referrer-when-downgrade"
></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}
