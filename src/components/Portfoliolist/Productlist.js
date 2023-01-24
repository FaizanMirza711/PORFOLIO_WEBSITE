import React from 'react'
import "./Productlist.css"
import Product from '../product/Product'
import { prodata } from "./prodata"
const productlist = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Hustle and Create. It's Faizan</h1>
                <p className="pl-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illo ad a odio, accusantium tempora nostrum praesentium magni velit dolorem doloremque nam ratione explicabo maxime reprehenderit cupiditate sit eum quam.</p>
            </div>
            <div className="pl-list">
                {prodata.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />))}

            </div>
        </div>
    )
}

export default productlist

