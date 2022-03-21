import React from 'react'
import { Link } from "react-router-dom";
import "./styles.css"

export default function Escolha() {
  return (
    <>
      <div className="container">
        <h1 className="title">Escolha uma das opções:</h1>
        <Link to="maior" className="link">Maior</Link>
        <Link to="menor" className="link">Menor</Link>
      </div>
    </>
  )
}
