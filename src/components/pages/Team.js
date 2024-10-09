import React from "react";
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation';     


export default function Team() {
    return <> 
    <div className='main-all'>
        <div className='responsive-type-animation1'>
          <TypeAnimation className='name' sequence={["Meet The Team", 1000]} speed={5} style={{ fontSize: '12vmin', fontFamily: 'Montserrat', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
        </div> 
    </div>
    <Cards/>
    <Footer/>
</>;
}