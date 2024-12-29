// src/components/Cart.js
import React, { useState } from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CartButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <CartContainer>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id}>
            <span>{item.name}</span>
            <span>{`₹${item.price}`}</span>
            <CartButton onClick={() => removeFromCart(item.id)}>
              Remove
            </CartButton>
          </CartItem>
        ))
      )}
    </CartContainer>
  );
};

export default Cart;
