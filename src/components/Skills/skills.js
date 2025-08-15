import React from "react";

import uidesign from "../../assets/ui-design.png";

import appdesign from "../../assets/app-design.png";
import websitedesign from "../../assets/website-design.png";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <span className="whatido">What I do!</span>
      <p className="parawhatido">
        I specialize in designing and developing responsive, user-friendly
        websites. <br></br>
        My focus is on creating clean and aesthetically pleasing UI/UX that
        enhances user engagement. <br></br>I enjoy turning ideas into real-world
        products using modern web technologies. <br></br>
        whether it's a landing page or a full-stack app, I love building things
        that work beautifully.
      </p>


      <div className="skillbars">

            <div className="skillbar">
              <img src={uidesign} alt="contact" className=" skillbarimg"></img>
              <div className="skillbartext">
                <h2 className="skillheading">UI/UX Design</h2>
                <p className="skillpara">I design clean,
      intuitive interfaces that enhance user interaction and experience. My
      focus is on creating visually appealing layouts with pixel-perfect
      precision.</p>
              </div> 
            </div>
            
            <div className="skillbar">
              <img src={websitedesign} alt="contact" className=" skillbarimg"></img>
              <div className="skillbartext">
                <h2 className="skillheading">Website Design</h2>
                <p className="skillpara">I build responsive, fast-loading websites tailored to both users and
          business goals. Using modern web technologies, I turn ideas into
          sleek, functional online experiences.</p>
              </div> 
            </div>


            <div className="skillbar">
              <img src={appdesign} alt="contact" className=" skillbarimg"></img>
              <div className="skillbartext">
                <h2 className="skillheading">App design</h2>
                <p className="skillpara">I craft
      engaging mobile app designs that blend usability with modern aesthetics.
      From wireframes to final UI, I ensure smooth, user-friendly experiences
      across devices.</p>
              </div> 
            </div>

      </div>



    </section>
  );
};

export default Skills;
