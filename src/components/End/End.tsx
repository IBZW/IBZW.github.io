import React from 'react';
import './End.css';
import { final } from '../../info';
import Social from '../Social/Social';

function Contact() {
  const Fade: any = require('react-reveal/Fade');
  return (
    <Fade bottom duration={800}>
      <section className="section--contact" id="end">
        <div className="contact-title">
          <p>{final.title}</p>
        </div>
        <div className="inner center">
          <div className="profile-img center">
            <img src={require("../../assets/images.jpeg")} alt="profile" />
          </div>
          <div className="wrapper-inner">
            <div className="contact-subtitle">
              <p>{final.subTitle}</p>
            </div>
            <div className="contact-introduce">
              <p>{final.introduce}</p>
            </div>
            <div className="social-links">
              <Social />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default Contact;
