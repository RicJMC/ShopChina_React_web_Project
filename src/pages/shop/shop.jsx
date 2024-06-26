import React from "react";
import { Product } from "./product";
import { PRODUCTS } from "../../products";
import "./shop.css"

export const Shop = () => {
  return (
    <div className="shop">
      <div>
        <h1 className="shopTitle"> Shop China do Beto Gipsy </h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (<Product key={product.id} data={product} />
      ))}
      </div>
    </div>
  )
};