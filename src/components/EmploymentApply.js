import React from 'react';
import { TypeAnimation } from 'react-type-animation';       
import backgroundVideo from '../videos/snow.mp4';
import Footer from './Footer';
import EmploymentForm from './EmploymentForm';

function Apply() { 

  return (
    <>
        <div className='main-container'>
            <video autoPlay loop muted playsInline>
            <source src={backgroundVideo} type='video/mp4' alt='Video by 33studiodesign from Pixabay'/>
            </video>
            <div className='responsive-type-animation'>
            <TypeAnimation className='name' sequence={["Work With Us", 1000]} speed={20} style={{ fontSize: '12vmin', fontFamily: 'Tahoma', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
            </div> 
        </div>
        <div className='main-card'>
            <EmploymentForm/>
        </div>
        <Footer/>
    </>
  )
};

export default Apply;
