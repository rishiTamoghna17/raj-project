import React from "react";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import AboutImage from "../assets/back.webp";
import CourseCards from "../components/courses/CourseCards";
import Footer from "../components/footer /Footer";
import TeamCard from "../components/courses/TeamCard";
import { team } from "../assets/dummydata";

export default function Training() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={AboutImage}
        title="Training"
        text="we have best teacher for teaching"
        // btlText = "Book Now"
        // url = "/"
        btnClass="hide"
      />

      <CourseCards />
      <TeamCard team={team} />
      <Footer />
    </>
  );
}
