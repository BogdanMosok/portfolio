import React from 'react'
import Button from '../../components/Button/Button'

export default function Support() {
  return (
    <section className='support'>
        <div className="support__container container">
                <h2 className="support__title">
                    For more Support
                </h2>
                <form action="" className='support__form'>
                    <input type="email" name="" id="" placeholder='Enter Email' className='support__enteremail'/>
                 
                    <Button className="support__btn">
                        Subscribe
                    </Button>
                   
                </form>
        </div>  
    </section>
  )
}
