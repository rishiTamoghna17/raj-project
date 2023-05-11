import React from 'react'
import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import AboutImage from "../assets/back.webp";
import CourseCards from '../components/courses/CourseCards';

export default function Training() {
  return (
    <>
    <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={AboutImage}
        title="Traing"
        // text="We make technology accessible!"
        // btlText = "Book Now"
        // url = "/"
        btnClass="hide"
      />
      <CourseCards/>
    </>
    
  )
}
