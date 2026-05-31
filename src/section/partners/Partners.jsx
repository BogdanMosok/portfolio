import React from 'react';
import uber from '../../assets/delivery/uber.svg';
import grub from '../../assets/delivery/grub.svg';
import post from '../../assets/delivery/post.svg';
import door from '../../assets/delivery/door.svg';
import foodp from '../../assets/delivery/foodp.svg';
import delivero from '../../assets/delivery/deliveroo.svg';
import instacart from '../../assets/delivery/instacart.svg';
import just from '../../assets/delivery/just.svg';
import didi from '../../assets/delivery/didi.svg';

export default function Partners() {
    const smalllogo2 = [
        { src: uber, alt: "Uber Eats" },
        { src: grub, alt: "Grubhub" },
        { src: post, alt: "Postmates" },
        
    ];
    const bigLogos = [
        { src: door, alt: "Doordash" },
        { src: foodp, alt: "Foodpanda" },
        { src: delivero, alt: "Deliveroo" },
    ];

    const smallLogos = [

    
        
        { src: instacart, alt: "Instacart" },
        { src: just, alt: "Just Eat" },
        { src: didi, alt: "DiDi Food" },
    ];

    return (
        <section className='partners'>
            <div className="partners__container container">
                <div className="partners__content">
                    <h2 className="partners__title">You can order through apps</h2>
                    <p className="partners__descr">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.
                    </p>
                </div>

                <div className="partners__grid">
                    {smalllogo2.map((logo, index) => (
                        <div key={`small-${index}`} className="partners__card partners__card--small">
                            <img src={logo.src} alt={logo.alt} />
                        </div>
                    ))}
                    {/* Ряд больших карточек */}
                    {bigLogos.map((logo, index) => (
                        <div key={`big-${index}`} className="partners__card partners__card--big">
                            <img src={logo.src} alt={logo.alt} />
                        </div>
                    ))}

                    {/* Ряд маленьких карточек */}
                    {smallLogos.map((logo, index) => (
                        <div key={`small-${index}`} className="partners__card partners__card--small">
                            <img src={logo.src} alt={logo.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}