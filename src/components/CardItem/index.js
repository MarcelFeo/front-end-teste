import React from 'react';
import "./styles.css";

export default function CardItem({ name, price, img}) {
  return (
    <>
      <div className="container-card">
        <div className="img-container">
          <img src={img} alt="imagem trufa" className="img"/>
        </div>
        <div className="name-container">
          <p>{name}<br/><p className="price">R$ {price}</p></p>
        </div>
      </div>
    </>
  )
}
