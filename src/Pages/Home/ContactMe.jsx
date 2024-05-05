import { useState } from "react";
import emailjs from "@emailjs/browser";
export default function ContactMe() {
  const Result = () => {
    return (
      <p>
        Thank you for reaching out! 🚀 I'll get back to you soon. Meanwhile,
        feel free to explore more on my portfolio. Cheers!
      </p>
    );
  };
  const [results, showResults] = useState();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("portfolio", "template_xfgddhs", e.target, "ju6FdCt87lx8WhYJe")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResults(true);
  };
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Let's connect and turn ideas into digital reality. Drop a message, and
          let's create something amazing together!
        </p>
      </div>
      <form className="contact--form--container" onSubmit={sendEmail}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstname"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastname"
              id="last-name"
              required
            />
          </label>

          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone-Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            id="choose-topic"
            name="choice"
            className="contact--input text-md"
          >
            <option>Select One...</option>
            <option name="web Designing">Web Designing</option>
            <option name="Graphics Designing">Graphics Designing</option>
            <option name="Editing">Editing</option>
            <option name="others">Other (Mention in the message box)</option>
          </select>
        </label>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            name="message"
          />
        </label>

        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
          <div className="row">{results ? <Result /> : null}</div>
        </div>
      </form>
    </section>
  );
}
