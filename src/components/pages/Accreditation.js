import React from 'react';
import '../../App.css';
import '../Main.css';
import { TypeAnimation } from 'react-type-animation';       
import ToolTip from '../ToolTip';
import Footer from '../Footer';

function Accreditation() { 
  return (
    <>
    <div className='main-all'>
        <div className='responsive-type-animation1'>
          <TypeAnimation className='name' sequence={["Accreditation", 1000]} speed={20} style={{ fontSize: '12vmin', fontFamily: 'Montserrat', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
        </div> 
    </div>
    <ToolTip/>
    <Footer/>
    </>
  )
};

export default Accreditation;
