import React from 'react';
import '../App.css';
import './Main.css';
import { Button } from './Button';
import { Button2 } from './Button2';
import { TypeAnimation } from 'react-type-animation';

function Main() { 
  return (
    <div className='main-container'>
        <div className='responsive-type-animation'>
          <TypeAnimation className='name' sequence={["Okanagan Inclusion", 1000]} speed={20} />
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
    </div>
  )
};

export default Main;