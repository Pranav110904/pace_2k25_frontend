import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Sponsors from "../components/Sponsor";
import SponsorForm from "../components/SponsorForm";
import EventSlider from "../components/EventSlider";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <EventSlider/>
      <Sponsors />
      <SponsorForm/>
    </>
  );
};

export default Home;
