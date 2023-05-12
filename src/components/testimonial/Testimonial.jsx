import React from "react";
import "./style.css";

const Testimonial = ({ testimonial }) => {
  return (
    <>
      <h1 className="teamcard">Our Success Story</h1>
      <section className="testimonial padding">
        <div className="container">
          <div className="content grid2">
            {testimonial.map((testimonial) => (
              <div key={testimonial.id} className="items shadow">
                <div className="box flex">
                  <div className="img">
                    <img src={testimonial.cover} alt={testimonial.name} />
                    <i className="fa fa-quote-left icon"></i>
                  </div>
                  <div className="name">
                    <h2>{testimonial.name}</h2>
                    <span>{testimonial.post}</span>
                  </div>
                </div>
                <p>{testimonial.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonial;
