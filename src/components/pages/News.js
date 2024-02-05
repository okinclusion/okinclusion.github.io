import React from "react";
import Calendar from "../Calendar.js";
import '../../App.css';
import Footer from '../Footer';
import backgroundVideo from '../../videos/snow.mp4';
import { TypeAnimation } from 'react-type-animation';  

function News() {

    return(
        <>
            <div className='main-container'>
                <div className='responsive-type-animation'>
                <TypeAnimation className='name' sequence={["News", 1000]} speed={20} style={{ fontSize: '12vmin', fontFamily: 'Tahoma', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
                </div> 
            </div>
            <div className="container">
            <Calendar/>
            </div>
            <Footer/>
        </>
    )
}

export default News;