import React from 'react';
import { TypeAnimation } from 'react-type-animation';   
import Footer from './Footer';
import HomeShareForm from './HomeShareForm';
import './Main.css';

function Apply() { 

  return (
    <>
        <div className='header-container'>
            <div className='responsive-type-animation'>
            <TypeAnimation className='name' sequence={["Home Share Application", 1000]} speed={20} style={{ fontSize: '12vmin', fontFamily: 'Tahoma', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
            </div> 
        </div>
        <div className='main-card'>
            <HomeShareForm/>
        </div>
        <Footer/>
    </>
  )
};

export default Apply;
