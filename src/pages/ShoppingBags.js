import React, { useEffect } from 'react';
import './ShoppingBags.css';
import Header from '../components/Header';

const products = [
  { 
    id: 1, 
    name: 'Cotton Mesh Shopping Bag', 
    description: 'A reusable cotton mesh bag perfect for groceries.', 
    price: 150, 
    image: 'https://images.pexels.com/photos/14262007/pexels-photo-14262007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
  },
  { 
    id: 2, 
    name: 'Jute Tote Bag', 
    description: 'Stylish and durable jute tote bag for everyday use.', 
    price: 250, 
    image: 'https://images.pexels.com/photos/8178482/pexels-photo-8178482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
  },
  { 
    id: 3, 
    name: 'Foldable Shopping Bag', 
    description: 'Lightweight and foldable shopping bag, easy to carry.', 
    price: 200, 
    image: 'https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
  },
];

const ShoppingBags = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
    {/* <Header/> */}
    <div className="shopping-bags-page">
      <h1>Reusable Shopping Bags Collection</h1>
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

export default ShoppingBags;
