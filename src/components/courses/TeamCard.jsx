import React from "react";
import "./TeamStyle.css";

const TeamCard = ({ team }) => {
  return (
    <>
      <h1 className="teamcard">our teams</h1>
      <div className="card-container">
        {team.map((val) => (
          <div className="card" key={val.id}>
            <div className="card-image">
              <img src={val.cover} alt="" />
              <div className="overlay">
                <a href={val.facebook}>
                  <i className="fab fa-facebook-f icon"></i>
                </a>
                <a href={val.twitter}>
                  <i className="fab fa-twitter icon"></i>
                </a>
                <a href={val.instagram}>
                  <i className="fab fa-instagram icon"></i>
                </a>
                <a href={val.tiktok}>
                  <i className="fab fa-tiktok icon"></i>
                </a>
              </div>
            </div>
            <div className="card-content">
              <h2>{val.name}</h2>
              <p>{val.work}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamCard;
