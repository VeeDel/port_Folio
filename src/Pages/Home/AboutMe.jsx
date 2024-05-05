import img from "../../erased_profile.png";
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={img} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            With experience in technical support and web development, I bring a
            diverse range of expertise. I excel in delivering exceptional
            customer service, resolving technical issues, and designing dynamic
            websites. Combining strong communication, problem-solving, and
            creative skills, I aim to contribute to an organization's success by
            providing top-notch support and creating positive user experiences.
            In web development, .
          </p>
          <p className="hero--section-description">
            I have built and maintained websites for clients through various
            online platforms, created and tested applications for websites, and
            developed guides to document processes and ensure business
            continuity
          </p>
        </div>
      </div>
    </section>
  );
}
