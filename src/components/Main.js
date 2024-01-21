import React from 'react';
import '../App.css';
import './Main.css';
import { Button } from './Button';
import { Button2 } from './Button2';
import { TypeAnimation } from 'react-type-animation';       
import backgroundVideo from '../videos/snow.mp4';

function Main() { 
  return (
    <div className='main-container'>
        <video autoPlay loop muted playsInline>
          <source src={backgroundVideo} type='video/mp4' alt='Video by 33studiodesign from Pixabay'/>
        </video>
        <div className='responsive-type-animation'>
          <TypeAnimation className='name' sequence={["Okanagan Inclusion", 1000]} speed={20} style={{ fontSize: '8vw', fontFamily: 'Tahoma', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
        </div> 
        <p className='title'>Est. 2013</p>
        <div className='main-btns'>
            <a href="/team"><Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>
                Meet the Team
            </Button>
            </a>
            <Button2 className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>
                Contact Us
            </Button2>
        </div>
    </div>
  )
};

export default Main;