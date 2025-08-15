import React from 'react';
import image from '../../assets/image.png';
import hireme from '../../assets/hireme.png';
import contact from '../../assets/contact.png';
import './intro.css';

const Intro = () => {
  // Remove hash from URL on initial load
  React.useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, null, ' ');
    }
  }, []);

  return (
    <section id="intro">
      <div className="intro-text">
        <span className="hello">Hello, </span><br />
        <span className="introcontenttextim">
          I'm
          <span className="introcontenttextpragati"> Pragati</span> <br />
          Budding Software Engineer
        </span>

        <p className="intropara">
          I am a skilled and passionate web designer with experience in creating<br />
          visually appealing and user-friendly websites.
        </p>

        <button 
          className='pdf' 
          onClick={() => window.open('/PragatiLoya_Resume.pdf', '_blank')}
        >
          <img src={contact} alt="contact" className='navbarcontactimg1' />
          Download Resume
        </button>

        <button
          className="btn"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <img src={hireme} alt="hireMe" className="hiremeimg" />
          Hire me
        </button>
      </div>

      <img src={image} alt="Pragati" className="bg" />
    </section>
  );
};

export default Intro;
