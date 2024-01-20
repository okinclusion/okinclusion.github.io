import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <p className='title'>Want More OI?
      <br/>
      <br/>
      Follow Us On Social Media
      </p>
      <section className='social-media'>
            <Link to='https://www.facebook.com/okinclusion' className='social-logo'>
              <img className='facebook' src='../../images/icons/facebook.png' alt='facebook logo' height={50}/>
            </Link>
            <Link to='https://twitter.com/OkanaganI' className='social-logo'>
              <img className='twitter' src='../../images/icons/twitter.png' alt='twitter logo' height={50}/>
            </Link>
            <Link to='https://www.instagram.com/okanaganinclusion/?igshid=OGQ5ZDc2ODk2ZA%3D%3D' className='social-logo'>
              <img className='instagram' src='../../images/icons/instagram.png' alt='instagram logo' height={50}/>
            </Link>
            <br/>
            <br/>
            <img className='logo' src='../../images/logocrop-nobg.png' alt='personal logo'/>
            <p>© Okanagan Inclusion. All rights reserved.</p>
      </section>
    </div>
  )
}

export default Footer;

// Facebook icons created by Freepik - Flaticon
// Twitter logo icons created by Md Tanvirul Haque - Flaticon
// Instagram logo icons created by Laisa Islam Ani - Flaticon