import React from "react";
import data from "../data/index.json";

export default function DownloadResume() {
  return (
    <section id="DownloadResume" className="resume--section">
      <h2 className="sections--heading">Download Resume</h2>
      <div className="resume--content">
        <p>You can view or download my resume by clicking the link below:</p>
        <a href={data.resume.link} className="resume--link" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
        <iframe 
          src="https://drive.google.com/file/d/1NxYMwFlXPyBm5-7AlenyYaU11zBcCtg0/preview" 
          width="100%" 
          height="600px" 
          title="Sarah Edwards Resume"
        ></iframe>
      </div>
    </section>
  );
}
