import React from "react";
import "./HeroStyles.css";

export default function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img
          alt="HERO IMG"
          src={props.heroImage}
        />
        <div className="hero-text">
            <h1>Professional Technology Assistance</h1>
            <p>We make technology accessible! </p>
            <a href="/">
                Book Now
            </a>
        </div>
      </div>
    </>
  );
}
