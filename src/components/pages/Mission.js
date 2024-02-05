import React from "react";
import '../../App.css';
import '../Item.css';
import Item from "../Item.js";
import Footer from '../Footer';
import backgroundVideo from '../../videos/snow.mp4';
import { TypeAnimation } from 'react-type-animation';  

export default function Mission() {
    return <> 
    <div className='main-container'>
        <div className='responsive-type-animation'>
          <TypeAnimation className='name' sequence={["Mission + Vision", 1000]} speed={20} style={{ fontSize: '12vmin', fontFamily: 'Tahoma', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
        </div> 
    </div>
    <Item/>
    <Footer/>
</>;
}

/* 
arrow: Down arrow icons created by th studio - Flaticon

*/

