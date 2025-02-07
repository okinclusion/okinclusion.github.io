import React from 'react';
import '../PrioritiesItem.css';
import { TypeAnimation } from 'react-type-animation';  
import PrioritiesItem from '../PrioritiesItem';
import Footer from '../Footer';

function Priorities() { 
  return (
    <>
    <div className='main-all'>
    <div className='name' style={{fontSize:'8vmin', fontFamily: 'Montserrat', color: '#fff', textShadow: '3px 2px #6C3092'}}>
      Strategic Priorities
        </div> 
    </div>
    <div className='main-text' style={{margin: '0 0 60px 0'}}></div>
    <PrioritiesItem/>
    <Footer/>
    </>
  )
};

export default Priorities;
