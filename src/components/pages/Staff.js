import React from "react";
import '../../App.css';
import '../Item.css';
import { Box } from '@mui/material';
import Footer from '../Footer';
import ShareVision from '../../images/shareVision.png';
import Relias from '../../images/relias.png';

export default function Staff() {
    return <> 
   <div className='main-all'>
        <div className='name' style={{fontSize:'8vmin', fontFamily: 'Montserrat', color: '#fff', textShadow: '3px 2px #6C3092'}}>
          Staff Resources
            </div> 
        </div>
    <div className='main'>
		<Box textAlign="center" margin="100px 0 0 0" fontFamily="Montserrat" fontSize="1.25rem" p={1} padding={"50px 30px"}>
        <h5 className='main-text' style={{fontFamily: 'Montserrat', margin: '0 0 -50px 0'}}>Click the Link to Access the Webpage.</h5>
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

