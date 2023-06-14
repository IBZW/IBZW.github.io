import React from 'react';
import './Footer.css';
import emoji from 'react-easy-emoji';

function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="footer-content">
          <p style={{ color: "white" }}>
            {emoji("Made By Ibraheem Zwayen")}
          </p>
          <p style={{ marginTop: "30px" }}>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
