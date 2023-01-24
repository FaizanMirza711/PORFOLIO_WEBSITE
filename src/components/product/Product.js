import React from 'react'
import "./Product.css"


const product = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link}>
        <img src={img} alt="myvirtuals" className="p-image"/>
      </a>
    </div>
  )
}

export default product
