import React,{ useRef }  from 'react';
import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'

function Home() {
    const featuredProductsRef = useRef(null);

  const scrollToFeaturedProducts = () => {
    featuredProductsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
        <Header />
      <Hero scrollToFeaturedProducts={scrollToFeaturedProducts} />
      <FeaturedProducts ref={featuredProductsRef}/>
      <Footer />
    </div>
  )
}

export default Home