import React from 'react';
import '../App.css';
import './Main.css';
import { Button } from './Button';
import { Button2 } from './Button2';

function Main() { 
  return (
    <div className='main-container'>
        <div className='main-name' style={{fontSize:'8vmin', fontFamily: 'Montserrat', color: '#fff', textShadow: '3px 2px #6C3092'}}>
          Okanagan Inclusion        
          </div> 
        <p className='title'>Est. 2013</p>
        <div className='main-btns'>
            <a href="/team"><Button className='btns' link="/team" buttonStyle='btn--outline'
            buttonSize='btn--large'>
                Meet the Team
            </Button>
            </a>
            <Button2 className='btns' link="/contact" buttonStyle='btn--primary'
            buttonSize='btn--large'>
                Contact Us
            </Button2>
        </div>
      <div className='poster-container'>
        <img src="../../images/Caregiver.png"/>
      </div>
    </div>
  )
};

export default Main;