import React from 'react'
import { TypeAnimation } from 'react-type-animation';     
import './ContactForm.css';
import './Item.css';


function ContactMain() {
  return (
    <div className='main-all exception'>
        <div className='responsive-type-animation1'>
          <TypeAnimation className='name' sequence={["Contact", 1000]} speed={20} style={{ fontSize: '8vw', fontFamily: 'Montserrat', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
        </div> 
    </div>
  )
}

export default ContactMain;