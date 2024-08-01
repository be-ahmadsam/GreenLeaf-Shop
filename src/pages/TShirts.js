import React, { useEffect } from 'react';

const TShirts = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])
  return (
    <div>
      <h1>Organic Cotton T-Shirts</h1>
      <img src="https://images.pexels.com/photos/4947543/pexels-photo-4947543.jpeg" alt="T-Shirts" />
      <p>Comfortable and eco-friendly t-shirts made from organic cotton.</p>
    </div>
  );
};

export default TShirts;
