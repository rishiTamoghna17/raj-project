import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import AboutImage from "../assets/jay-wennington-loAgTdeDcIU-unsplash.jpg";
import Footer from "../components/footer /Footer";
import ContactUs from "../components/contactUs/ContactUs";
export default function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={AboutImage}
        title="Contact"
        // text="We make technology accessible!"
        // btlText = "Book Now"
        // url = "/"
        btnClass="hide"
      />
      <ContactUs />
      <Footer />
    </>
  );
}
