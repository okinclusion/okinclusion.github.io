import React from "react";
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import backgroundVideo from '../../videos/snow.mp4';
import { TypeAnimation } from 'react-type-animation';     


export default function Team() {
    return <> 
    <div className='main-container'>
        <video autoPlay loop muted playsInline>
            <source src={backgroundVideo} type='video/mp4' alt='Video by Jemaver from Pixabay'/>
        </video>
        <div className='responsive-type-animation'>
          <TypeAnimation className='name' sequence={["Meet The Team", 1000]} speed={5} style={{ fontSize: '12vmin', fontFamily: 'Tahoma', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
        </div> 
    </div>
    <Cards/>
    <Footer/>
</>;
}