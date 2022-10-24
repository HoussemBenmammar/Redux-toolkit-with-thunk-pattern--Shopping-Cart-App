import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "./../store/cart-slice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const decrementQuantity = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  const incrementQuantity = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>{price} $</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={incrementQuantity}>
        +
      </button>
      <button className="cart-actions" onClick={decrementQuantity}>
        -
      </button>
    </div>
  );
};

export default CartItem;
