import React, { useEffect } from 'react';
import './Toothbrush.css';
import Header from '../components/Header';


const products = [
  { id: 1, 
    name: 'Single Bamboo Toothbrush', 
    description: 'A biodegradable toothbrush made from bamboo.', 
    price: 100, 
    image: 'https://images.pexels.com/photos/6621378/pexels-photo-6621378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { id: 2, 
    name: 'Set of 4 Bamboo Toothbrushes', 
    description: 'A set of four biodegradable bamboo toothbrushes.', 
    price: 350, 
    image: 'https://images.pexels.com/photos/4202938/pexels-photo-4202938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { id: 3, name: 'Eco-Friendly Toothbrush Set', description: 'Includes two bamboo toothbrushes and a bamboo toothbrush holder.', price: 450, 
    image: 'https://images.pexels.com/photos/7262997/pexels-photo-7262997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
];

const Toothbrush = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
    {/* <Header/> */}
    <div className="toothbrush-page">
      
      <h1>Eco-Friendly Toothbrush Collection</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">₹{product.price}</p>
            <div className="product-buttons">
              <button className="cart-button">Add to Cart</button>
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Toothbrush;
