import React from 'react'
import { menorApi } from "../../services/menorApi"
import { Link } from "react-router-dom";
import CardItem from "../CardItem"

import "./styles.css"

console.log(menorApi);

export default function Maior() {
  return (
    <>
      <div className="container">
        <div className="title-container">
          <h1>Meu carrinho</h1>
        </div>
        <div className="card-container">
          {menorApi.items.map((item) => (
            <CardItem 
              name={item.name}
              price={item.price / 100}
              img={item.imageUrl}
            />
          ))}
        </div>
        <div className="total-container">
          <div>
            <p>Total</p>
          </div>
          <div>
            <p>R${menorApi.totalizers[0].value / 100}</p>
          </div>
        </div>
        <div className="btn-container">
          <Link to="/" className="btn">Finalizar compra</Link>
        </div>
      </div>
    </>
  )
}
