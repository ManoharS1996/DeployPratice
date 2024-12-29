// src/components/Product.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const Product = ({ product, addToCart }) => {
  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{`₹${product.price}`}</p>
      <ProductButton onClick={() => addToCart(product)}>
        Add to Cart
      </ProductButton>
    </ProductContainer>
  );
};

export default Product;
