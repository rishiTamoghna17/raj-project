import "./FooterStyles.css";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1>indiancybershield</h1>
            <p>Best Cyber Security Provider </p>
          </div>
          <div>
            <a href="/">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href ="/">ChangeLog</a>
                <a href ="/">Status</a>
                <a href ="/">License</a>
                <a href ="/">All Version</a>
            </div>
            <div>
            <h4>Community</h4>
                <a href ="/">Github</a>
                <a href ="/">Issues</a>
                <a href ="/">Project</a>
                <a href ="/">Twitter</a>
            </div>
            <div>
            <h4>Help</h4>
                <a href ="/">Support</a>
                <a href ="/">TroubleShooting</a>
                <a href ="/">Contact Us</a>
            </div>
            <div>
            <h4>Others</h4>
                <a href ="/">Terms of Service</a>
                <a href ="/">Privacy Policy</a>
                <a href ="/">License</a>
            </div>
        </div>
      </div>
    </>
  );
}
