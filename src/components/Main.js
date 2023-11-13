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
      title="Hoya Courses"
      year="2023"
      websiteLink="https://hoyacourses.com/"
      image="/assets/hoyacourses.png"
      languages={["React", "Python", "Selenium"]}
      info="An online platform for Georgetown students to find classes and professors that fit their needs. Built to help students navigate the university’s outdated course registration system."
    />
    <Showcase
      title="FoodMe App"
      websiteLink="https://youtu.be/-rgiAKuSCuY"
      image="/assets/foodme.png"
      year="2023"
      languages={["Flutter", "Firebase", "Google Maps API"]}
      info="Placed Top 3 nationally in Google’s 2023 Solution Challenge with an app built using Flutter and Google Maps API designed to combat food insecurity."
    />
    <Showcase
      title="Basha Swim & Dive"
      year="2021"
      websiteLink=""
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
