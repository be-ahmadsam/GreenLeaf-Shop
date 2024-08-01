import React, { useEffect } from 'react';
import './Community.css'; // Add styling specific to the Community page
import Header from '../components/Header';

const articles = [
  {
    id: 1,
    title: "How to Reduce Your Environmental Footprint",
    content: "Reducing your environmental footprint can be achieved through various means, such as minimizing waste, conserving energy, and choosing sustainable products...",
    image: "https://images.pexels.com/photos/8543570/pexels-photo-8543570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 2,
    title: "Benefits of Sustainable Living",
    content: "Sustainable living not only helps the environment but also promotes a healthier lifestyle. By making conscious choices, you can reduce your impact on the planet...",
    image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 3,
    title: "Shopping from GreenLeafShop: A Guide",
    content: "At GreenLeafShop, we offer a range of eco-friendly products that help reduce your carbon footprint. Learn how our products are made and how they contribute to sustainability...",
    image: "https://images.pexels.com/photos/6347707/pexels-photo-6347707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 4,
    title: 'The Benefits of Using Renewable Energy at Home',
    content: 'Switching to renewable energy sources like solar and wind power can significantly reduce your carbon footprint. Discover the benefits of renewable energy and how you can implement it at home...',
    image: 'https://images.pexels.com/photos/7425345/pexels-photo-7425345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 5,
    title: 'Sustainable Fashion: A Guide to Ethical Clothing',
    content: 'Sustainable fashion is more than a trend; it\'s a movement towards ethical and eco-friendly clothing. Learn how to build a sustainable wardrobe and the positive impact it has on the planet...',
    image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 6,
    title: '10 Simple Steps to Reduce Waste at Home',
    content: 'Reducing waste at home can be as simple as rethinking your daily habits. From composting to reusable containers, learn 10 practical steps to minimize waste and live a more eco-friendly lifestyle...',
    image: 'https://images.pexels.com/photos/1367232/pexels-photo-1367232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 7,
    title: 'The Importance of Supporting Local and Sustainable Brands',
    content: 'Supporting local and sustainable brands not only boosts the local economy but also reduces carbon emissions. Discover why choosing local products is a key step towards sustainability...',
    image: 'https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 8,
    title: 'Eco-Friendly Home Decor Ideas',
    content: 'Transform your living space with eco-friendly home decor. From recycled materials to energy-efficient lighting, explore creative and sustainable ways to decorate your home...',
    image: 'https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 9,
    title: 'How to Start a Community Garden',
    content: 'Community gardens bring people together and promote sustainable food practices. Learn how to start a community garden in your area and the benefits it brings to the environment and local community...',
    image: 'https://images.pexels.com/photos/6647048/pexels-photo-6647048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  
];

const Community = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
   <>
   {/* <Header/> */}
    <div className="community">
      <h1>Community Page</h1>
      <p>Welcome to the Community page. Here you can find information about our community activities, sustainable practices, and more!</p>
      
      <div className="articles">
        {articles.map(article => (
          <div key={article.id} className="article">
            <img src={article.image} alt={article.title} />
            <div className="article-content">
              <h2>{article.title}</h2>
              <p>{article.content}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div></>
  );
};

export default Community;
