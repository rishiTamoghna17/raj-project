import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import AboutImage from "../assets/erik-mclean-aielvGxZB0g-unsplash.jpg";
import Footer from "../components/footer /Footer";
import FormComponent from "../components/form/FormData";

export default function Booking() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={AboutImage}
        title="service"
        // text="We make technology accessible!"
        // btlText = "Book Now"
        // url = "/"
        btnClass="hide"
      />
      <FormComponent />
      <Footer />
    </>
  );
}
