import React from 'react'
import Button from '../../components/Button/Button'

export default function Franchisee() {
    return (
        <section className='franchisee'>
            <div className="franchisee__container container">
                <h2 className="franchisee__title">
                    Start The Adventure Today And Become a Franchisee
                </h2>
                <p className="franchisee__descr">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="franchisee__btn">
                <Button className="franchisee__button ">
                   Become a Franchisee
                </Button>
                </div>
            </div>
        </section>
    )
}
