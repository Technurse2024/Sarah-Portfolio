import React from "react";
import data from "../data/index.json";

export default function MyPortfolio() {
  return (
    <section id="MyPortfolio" className="portfolio--section">
      <h2 className="sections--heading">My Portfolio</h2>
      <div className="portfolio--section--container">
        {data.portfolio.map((project, index) => (
          <div key={index} className="portfolio--section--card">
            
            <div className="portfolio--section--card--content">
              <h3 className="portfolio--section--title">{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="portfolio--link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

