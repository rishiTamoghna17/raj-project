import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import AboutImage from "../assets/markus-spiske-70Rir5vB96U-unsplash.jpg";
import Footer from "../components/footer /Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={AboutImage}
        title="About Us"
        // text="We make technology accessible!"
        // btlText = "Book Now"
        // url = "/"
        btnClass="hide"
      />
      <Footer/>
    </>
  );
}
