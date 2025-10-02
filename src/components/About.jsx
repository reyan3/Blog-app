import React from "react";
import "./About.css";

const About = () => {
  return (
    <section class="about-section">
      <div class="about-text">
        <h1>About</h1>
        <p>
          I am a blog that shares insights on various topics including
          technology, lifestyle, and more. My goal is to provide valuable
          content and engage readers through informative articles and thoughtful
          discussions.
        </p>
      </div>
      <div class="about-image">
        <img src="/illustrate.png" alt="About Illustration" />
      </div>
    </section>
  );
};

export default About;
