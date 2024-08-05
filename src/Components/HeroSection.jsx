import React from "react";
import heroImage from "../Assets/sarahheadshot.jpg"; // Adjust the path according to your structure

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content-box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Sarah</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
          I am a passionate full-stack developer with a background in both front-end and back-end technologies. I specialize in creating dynamic, responsive, and user-friendly web applications.
            
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
      <img src={heroImage} alt="Hero Section" />
      </div>
    </section>
  );
}
