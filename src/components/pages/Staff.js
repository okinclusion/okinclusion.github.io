import React from "react";
import '../../App.css';
import '../Item.css';
import { Box } from '@mui/material';
import Footer from '../Footer';
import backgroundVideo from '../../videos/snow.mp4';
import { TypeAnimation } from 'react-type-animation';  
import ShareVision from '../../images/shareVision.png';
import Relias from '../../images/relias.png';

export default function Staff() {
    return <> 
    <div className='main-container'>
        <video autoPlay loop muted playsInline>
            <source src={backgroundVideo} type='video/mp4' alt='Video by Jemaver from Pixabay'/>
        </video>
        <div className='responsive-type-animation'>
          <TypeAnimation className='name' sequence={["Staff Resources", 1000]} speed={20} style={{ fontSize: '12vmin', fontFamily: 'Tahoma', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
        </div> 
    </div>
    <div className='main'>
		<Box textAlign="center" margin="40px 0 0 0" fontFamily="Tahoma" fontSize="1.25rem" p={1} padding={"50px 30px"}>
        <h5 className='main-text' style={{fontFamily: 'Tahoma'}}>Click the Link to Access the Webpage.</h5>
            <div className="links">
                <img className="pics" src={ShareVision} width={"150px"}/>
                <br/>
			    <a href="https://okinclusion.sharevision.ca/Account/Login?ReturnUrl=%2f" className="link-item">Share Vision</a>
                <br/>
                <img className="pics" src={Relias} width={"150px"}/>
                <br/>
                <a href="https://okinclusion.sharevision.ca/Account/Login?ReturnUrl=%2f" className="link-item">Relias</a>

            </div>
			<br/>
			<br/>
			<br/>
		</Box>
    </div>
    <Footer/>
</>;
}

/*  
arrow: Down arrow icons created by th studio - Flaticon

*/

