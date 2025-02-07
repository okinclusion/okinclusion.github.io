import React from "react";
import Calendar from "../Calendar.js";
import '../../App.css';
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation'; 
import { EventProvider } from "../EventContext.js"; 

function News() {

    return(
        <>
            <div className='main-all'>
            <div className='name' style={{fontSize:'8vmin', fontFamily: 'Montserrat', color: '#fff', textShadow: '3px 2px #6C3092'}}>
          News
        </div> 
            </div> 
            <div className='main-text' style={{margin: '0 0 60px 0'}}></div>
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