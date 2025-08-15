import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import './links.css'; 

const Links = () => {
  return (


   <section>
    <div id= 'connect'>
        <h1 className='connecthead'>Connect me here!</h1>
        <p className='connectpara'>
            Connect with me on below platforms
    
        </p>

 <div className="social-links">
          <a
            href="https://github.com/PragatiLoya"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://in.linkedin.com/in/pragati-loya-b87751246"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://instagram.com/prachi_loya"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
           <FaInstagram size={30} />
          </a>
          <a
            href="https://facebook.com/prachu.loya"
            className="social-icon"
          > <FaFacebook size={30} />
            
          </a>
        </div>
      </div>
    </section>
  );
};
export default Links;