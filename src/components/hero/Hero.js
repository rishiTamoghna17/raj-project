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
            <h1>{props.title}</h1>
            <p>{props.text} </p>
            <a href={props.url} className={props.btnClass}>
                {props.btlText}
            </a>
        </div>
      </div>
    </>
  );
}
