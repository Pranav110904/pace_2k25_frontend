import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Sponsors from "../components/Sponsor";
import SponsorForm from "../components/SponsorForm";
import EventSlider from "../components/EventSlider";
import Countdown from '../components/Countdown';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Countdown/>
      <EventSlider/>
      <Sponsors />
      <SponsorForm/>
    </>
  );
};

export default Home;
