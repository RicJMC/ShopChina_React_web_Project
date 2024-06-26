import React, {useContext} from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>{productName}</p>
        <p>€{price}</p>
      </div>
      <div className="countHandler">
        <button onClick={() => removeFromCart(id)}>-</button>
        <input type="number" value={cartItems[id]}  />
        <button onClick={() => addToCart(id)}>+</button>
      </div>
    </div>
  );
};