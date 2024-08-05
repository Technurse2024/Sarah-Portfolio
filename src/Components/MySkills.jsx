import React from "react";
import data from "../data/index.json";

export default function MySkills() {
  return (
    <section id="MySkills" className="skills--section">
      <h2 className="skills--section--heading">My Skills</h2>
      <div className="skills--section--container">
        {data.skills.map((skill, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={skill.image} alt={skill.title} />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{skill.title}</h3>
              <p className="skills--section--description">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
