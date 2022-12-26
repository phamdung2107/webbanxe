import React from "react";
import "./Cart.css";
import { Typography } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Link } from "react-router-dom";
import CartItemCard from "./CartItemCard";

const cartItems = [{
  image: "test.com",
  name: "test.com",
  price: 12,
}]

const Cart = () => {
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />
          <Typography>No Items In Cart</Typography>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item.product}>
                  <CartItemCard item={item}  />
                  <p className="cartSubtotal">{`$${
                    item.price * item.quantity
                  }`}</p>
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
