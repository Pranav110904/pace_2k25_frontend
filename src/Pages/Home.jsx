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
      <div className="mb-16">
        <Hero />
      </div>
      <div className="mb-16">
        <About />
      </div>
      <div className="mb-25">
        <Countdown />
      </div>
      <div className="mb-16">
        <EventSlider />
      </div>
      <div className="mb-25">
        <Sponsors />
      </div>
      <div className="mb-16">
        <SponsorForm />
      </div>
    </>
  );
};

export default Home;
