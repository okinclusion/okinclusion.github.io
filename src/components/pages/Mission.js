import React from "react";
import '../../App.css';
import '../Item.css';
import Item from "../Item.js";
import Footer from '../Footer';
import backgroundVideo from '../../videos/snow.mp4';
import { TypeAnimation } from 'react-type-animation';  
import arrow from '../../images/down-arrow.png'     ;

export default function Mission() {
    return <> 
    <div className='main-container'>
        <video autoPlay loop muted playsInline>
            <source src={backgroundVideo} type='video/mp4' alt='Video by Jemaver from Pixabay'/>
        </video>
        <div className='responsive-type-animation'>
          <TypeAnimation className='name' sequence={["Mission + Vision", 1000]} speed={20} style={{ fontSize: '12vw', fontFamily: 'Tahoma', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
        </div> 
        <div className='main-btns'>
            <img src={arrow} height={60}/>
        </div>
    </div>
    <Item/>
    <Footer/>
</>;
}

/* 
arrow: Down arrow icons created by th studio - Flaticon

*/

