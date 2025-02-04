import React from "react";
import '../../App.css';
import '../Item.css';
import { Box } from '@mui/material';
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation';  

export default function Resources() {
    return <> 
    <div className='main-all exception'>
        <div className='responsive-type-animation1'>
          <TypeAnimation className='name' sequence={["Resources", 1000]} speed={20} style={{ fontSize: '12vmin', fontFamily: 'Montserrat', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
        </div> 
    </div>
    <div className='main'>
      <Box textAlign="center" className="background" fontFamily="Tahoma" fontSize="3vmin" p={1} padding={"50px 30px"}>
			  <h1>Partners</h1>
        <div className='main_info' style={{fontSize: '3vmin'}}>
            <a href="https://inclusionbc.org"><img width="100px" src="images/inclusionBClogo.jpg"/></a>
            &nbsp;
            <a href="https://www.communitylivingbc.ca"><img width="150px" src="images/CLBClogo.png"/></a>
            &nbsp;
            <a href="https://www.cape.ca"><img width="140px" src="images/CAPElogo.png"/></a>
            </div>
        </Box>
		</div>
    {/* <Item/> */}
    <Footer/>
</>;
}

/* 
arrow: Down arrow icons created by th studio - Flaticon

*/

