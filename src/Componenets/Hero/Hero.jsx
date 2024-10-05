import React, { useState } from 'react';
import './Hero.css';
import prof2 from '../../assets/prof2.png';  // Front image
import prof1 from '../../assets/prof1.jpg';  // Back image
import { Link } from 'react-scroll';

const Hero = () => {
  const [menu, setMenu] = useState("contact");

  return (
    <div id="home" className='hero'>
      <div className="flip-container">
        <div className="flip-card">
          <div className="flip-card-front">
            <img src={prof2} alt="Front" />
          </div>
          <div className="flip-card-back">
            <img src={prof1} alt="Back" />
          </div>
        </div>
      </div>

      <h1><span>I'm Muthamizh Kumaran</span></h1>
      <h1 className='line2'>a full stack developer from India</h1>
      <p>I love to code and do projects!!!</p>

      <div className="hero-action">
        <div className='hero-connect'>
          <Link 
            className='anchor-link' 
            to='contact' 
            smooth={true} 
            offset={-50} 
            duration={500}
            onClick={() => setMenu("contact")}
          >
            Contact me
          </Link>
        </div>
        <div className="hero-resume">My CV</div>
      </div>
    </div>
  );
}

export default Hero;
