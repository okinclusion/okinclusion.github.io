import React from "react";
import '../../App.css';
import '../Item.css';
import { Box } from '@mui/material';
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation';  

export default function Resources() {
    return <> 
    <div className='main-all'>
    <div className='name' style={{fontSize:'8vmin', fontFamily: 'Montserrat', color: '#fff', textShadow: '3px 2px #6C3092'}}>
         Resources    
        </div> 
    </div>
    <div className='main main-text'>
      
      <Box textAlign="center" className="background" fontFamily="Tahoma" fontSize="3vmin" p={1} padding={"50px 30px"}>
			  <h1>Partners</h1>
        <div className='main_info' style={{fontSize: '3vmin'}}>
            <a href="https://inclusionbc.org"><img width="100px" src="images/OrganizationLogos/inclusionBClogo.jpg"/></a>
            &nbsp;
            <a href="https://www.communitylivingbc.ca"><img width="150px" src="images/OrganizationLogos/CLBClogo.png"/></a>
            &nbsp;
            <a href="https://www.supportedemployment.ca"><img width="400px" src="images/OrganizationLogos/CASElogo.webp"/></a>
            </div>
        </Box>
		</div>
    <Footer/>
</>;
}