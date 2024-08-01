import React, { useEffect } from 'react';
import './TShirts.css';
import Header from '../components/Header';

const products = [
  { 
    id: 1, 
    name: 'Classic Organic Cotton Tee', 
    description: 'A classic t-shirt made from 100% organic cotton.', 
    price: 500, 
    image: 'https://images.pexels.com/photos/7479808/pexels-photo-7479808.jpeg' 
  },
  { 
    id: 2, 
    name: 'Graphic Organic Cotton Tee', 
    description: 'A stylish t-shirt with a graphic print, made from organic cotton.', 
    price: 600, 
    image: 'https://images.pexels.com/photos/16831785/pexels-photo-16831785.jpeg' 
  },
  { 
    id: 3, 
    name: 'Organic Cotton V-Neck Tee', 
    description: 'A comfortable v-neck t-shirt made from organic cotton.', 
    price: 550, 
    image: 'https://images.pexels.com/photos/17110687/pexels-photo-17110687.jpeg' 
  },
];

const TShirts = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
   <> 
   {/* <Header/> */}
   <div className="tshirts-page">
   <h1>Organic Cotton T-Shirts Collection</h1>
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
 </div></>
  );
};

export default TShirts;
