import React, { Component } from 'react'

export class Itemsp extends Component {
  render() {
    return (
      <div className='itemCardP'>
            <img src={this.props.item.img} alt=""/>
            <span className='menucardf__price'>${this.props.item.price}</span>
            <h3 className='menucardf__title'>{this.props.item.title}</h3>
            <p className='menucardf__descr'>{this.props.item.desc}</p>
      </div>
    )
  }
}



export default Itemsp