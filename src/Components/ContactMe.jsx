import React from "react";

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <h2 className="sections--heading">Get In Touch</h2>
      <form className="contact--form--container">
        <div className="container">
          <label className="contact--label">
            <span>Name</span>
            <input type="text" className="contact--input" />
          </label>
          <label className="contact--label">
            <span>Email</span>
            <input type="email" className="contact--input" />
          </label>
        </div>
        <label className="contact--label">
          <span>Message</span>
          <textarea className="contact--input"></textarea>
        </label>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </section>
  );
}
