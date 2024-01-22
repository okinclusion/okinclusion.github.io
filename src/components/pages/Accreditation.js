import React from 'react';
import '../../App.css';
import '../Main.css';
import { TypeAnimation } from 'react-type-animation';       
import backgroundVideo from '../../videos/snow.mp4';
import ToolTip from '../ToolTip';
import Footer from '../Footer';

function Accreditation() { 
  return (
    <>
    <div className='main-container'>
        <video autoPlay loop muted playsInline>
          <source src={backgroundVideo} type='video/mp4' alt='Video by 33studiodesign from Pixabay'/>
        </video>
        <div className='responsive-type-animation'>
          <TypeAnimation className='name' sequence={["Accreditation", 1000]} speed={20} style={{ fontSize: '12vmin', fontFamily: 'Tahoma', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
        </div> 
    </div>
    <ToolTip/>
    <Footer/>
    </>
  )
};

export default Accreditation;
