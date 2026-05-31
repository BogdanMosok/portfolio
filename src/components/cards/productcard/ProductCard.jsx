import React, { Component } from 'react'

import Itemsp from './Itemsp'


export class ProductCard extends Component {
  render() {
    return (
      <div className='menucardf'>
        {this.props.items.map(el => (
          <Itemsp key={el.id} item={el}/>
        ))}
      </div>
    )
  }
}

export default ProductCard