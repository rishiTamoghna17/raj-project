import React from "react";

import "./ContactUs.css";
// import FormComponent from "../form/FormData";

const ContactUs = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.293765283957!2d88.41449908227644!3d22.57635637561787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c0d%3A0xece6f8e0fc2e1613!2sSector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1683808376019!5m2!1sen!2sin";

  return (
    <section className="contacts padding">
      <div className="container shadow flexSB">
        <div className="left row">
          <iframe
            title="Google Maps"
            src={mapSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="right row">
          <h1>Contact Us</h1>
          <p>We're open for any suggestion or just to have a chat</p>

          <div className="items grid2">
            <div className="box address">
              <h4>Address:</h4>
              <p>198 West 21th Street, Suite 721 New York NY 10016</p>
            </div>
            <div className="box email">
              <h4>Email:</h4>
              <p>info@yoursite.com</p>
            </div>
            <div className="box phone">
              <h4>Phone:</h4>
              <p>+1235 2355 98</p>
            </div>
          </div>

          {/* <FormComponent/> */}
          <div className="follow">
            <h3>Follow Us Here</h3>
            <a href="/">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
