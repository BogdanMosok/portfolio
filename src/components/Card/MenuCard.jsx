import cartb from '../../assets/cartb.svg'
import React from "react";
import ReactDOM from "react-dom";



export default function MenuCard({ item }) {


  return (
    <div className="menu-card">
      <img src={item.image} alt={item.title}  className="card-image"/>
      <h3 className="card-title">{item.title}</h3>
      <p className="card-descr">{item.descr}</p>
      <div className="menu-card-bottom">
      <p className="card-price">${item.price.toFixed(2)}</p>
      <button className='cart-button' data-action="btnplus">
     <img src={cartb} alt="cart-image"/>
     </button>
     </div>
    </div>
  );
}
