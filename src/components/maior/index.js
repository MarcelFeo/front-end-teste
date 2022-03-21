import React from 'react'
import { maiorApi } from "../../services/maiorApi"
import { Link } from "react-router-dom";
import CardItem from "../CardItem"

import "./styles.css"

console.log(maiorApi);

export default function Maior() {
  return (
    <>
      <div className="container">
        <div className="title-container">
          <h1>Meu carrinho</h1>
        </div>
        <div className="card-container">
          {maiorApi.items.map((item) => (
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
            <p>R${maiorApi.totalizers[0].value / 100}</p>
          </div>
        </div>
        <div className="message-container">
          <p>Parabéns, sua compra tem frete grátis!</p>
        </div>
        <div className="btn-container">
          <Link to="/" className="btn">Finalizar compra</Link>
        </div>
      </div>
    </>
  )
}
