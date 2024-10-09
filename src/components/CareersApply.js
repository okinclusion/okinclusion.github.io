import React from 'react';
import { TypeAnimation } from 'react-type-animation';  
import Footer from './Footer';
import CareersForm from './CareersForm';

function Apply() { 

  return (
    <>
        <div className='main-container'>
            <div className='responsive-type-animation'>
            <TypeAnimation className='name' sequence={["Work With Us", 1000]} speed={20} style={{ fontSize: '12vmin', fontFamily: 'Tahoma', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
            </div> 
        </div>
        <div className='main-card'>
            <CareersForm/>
        </div>
        <Footer/>
    </>
  )
};

export default Apply;
