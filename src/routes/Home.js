import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import AboutImage from "../assets/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg"
import Footer from "../components/footer /Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImage={AboutImage}
        title="Professional Technology Assistance"
        text="We make technology accessible!"
        btlText = "Book Now"
        url = "/booking"
        btnClass = "show"
      />
      <Footer/>
    </>
  );
}
