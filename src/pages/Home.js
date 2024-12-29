// src/pages/Home.js
import React, { useState } from 'react';
import Product from '../components/Product';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Product 1', price: 500, image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, name: 'Product 2', price: 1000, image: 'https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, name: 'Product 3', price: 1000, image: 'https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, name: 'Product 4', price: 1000, image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 5, name: 'Product 5', price: 1000, image: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, name: 'Product 6', price: 1000, image: 'https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 7, name: 'Product 7', price: 1000, image: 'https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 8, name: 'Product 8', price: 1000, image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 9, name: 'Product 9', price: 1000, image: 'https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 10, name: 'Product 10', price: 1000, image: 'https://images.pexels.com/photos/247769/pexels-photo-247769.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 11, name: 'Product 11', price: 1000, image: 'https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 12, name: 'Product 12', price: 1000, image: 'https://images.pexels.com/photos/2693646/pexels-photo-2693646.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 13, name: 'Product 13', price: 1000, image: 'https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 14, name: 'Product 14', price: 1000, image: 'https://images.pexels.com/photos/3373737/pexels-photo-3373737.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 15, name: 'Product 15', price: 1000, image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600' },
    // Add more products here
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <h2>Our Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
