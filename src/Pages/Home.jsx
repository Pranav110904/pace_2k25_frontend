import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Countdown from '../components/Countdown';

const Home = () => {
  return (
    <>
      <Hero />
      <Countdown/>
      <About />
    </>
  );
};

export default Home;
