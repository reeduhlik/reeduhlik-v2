import React from "react";
import Landing from "./Landing_v2";
import Portfolio from "./Portfolio_v2";
import Showcase from "./Showcase";
import Footer from "./Footer";
import Story from "./Story";
import Skills from "./Skills";

const Main = () => (
  <div className="content">
    <Landing />
    <Showcase
      title="Reservable.io"
      websiteLink="https://our-gym-calendar.herokuapp.com/"
      image="/assets/reservable.png"
      languages={["React", "NodeJS", "Express"]}
      info="An organizational tool for apartment managers and tenants to reserve and schedule facility amenities. Features include an elegant UI, OAuth, Google Calendar integration, and a robust API."
    />
    <Showcase
      title="Basha Swim & Dive"
      websiteLink="https://bhsswimanddiveteam.com"
      image="/assets/basha-swim.png"
      languages={["React", "NodeJS", "Express", "MongoDB"]}
      info="A swim club management site that allows coaches to enter meet line-ups, track results, and communicate with their athletes."
    />
    <Portfolio />
    <Skills />
    <Story />
    <Footer />
  </div>
);

export default Main;
