import React from "react";
import Calendar from "../Calendar.js";
import '../../App.css';
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation'; 
import { EventProvider } from "../EventContext.js"; 

function News() {

    return(
        <>
            <div className='main-container'>
                <div className='responsive-type-animation'>
                <TypeAnimation className='name' sequence={["News", 1000]} speed={20} style={{ fontSize: '12vmin', fontFamily: 'Montserrat', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
                </div> 
            </div>
            <div className="container">
                <EventProvider>
                    <Calendar/>
                </EventProvider>
            </div>
            <Footer/>
        </>
    )
}

export default News;