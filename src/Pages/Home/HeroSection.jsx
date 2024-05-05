import img2 from "../../IMG_5167.jpg";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Washid</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Web</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Passionate web developer with a flair for creating visually stunning
            and functional websites, <br /> dedicated to delivering seamless
            user experiences through innovative design and clean, efficient
            code.
          </p>
        </div>
        <button className="btn btn-primary"> Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src={img2} alt="Hero Section" />
      </div>
    </section>
  );
}
