// src/pages/Community.js
import React, { useEffect } from 'react';
import './Community.css'; // Optional: Add styling specific to the Community page

const Community = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])
  return (
    <div className="community">
      <h1>Community Page</h1>
      <p>Welcome to the Community page. Here you can find information about our community activities and more!</p>
    </div>
  );
};

export default Community;
