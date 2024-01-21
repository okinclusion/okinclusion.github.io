import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import backgroundVideo from '../../videos/snow.mp4';
import { TypeAnimation } from 'react-type-animation';  
import InclusionItem from '../InclusionItem';
import '../InclusionItem.css';


function Penticton() {
    return <> 
    <div className='main-container'>
        <video autoPlay loop muted playsInline>
            <source src={backgroundVideo} type='video/mp4' alt='Video by Jemaver from Pixabay'/>
        </video>
        <div className='responsive-type-animation'>
          <TypeAnimation className='name' sequence={["Penticton", 1000]} speed={20} style={{ fontSize: '12vw', fontFamily: 'Tahoma', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
        </div> 
    </div>
    <InclusionItem/>
    <Footer/>
</>;
}
export default Penticton;