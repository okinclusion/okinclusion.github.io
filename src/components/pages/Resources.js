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
			  <h1>Coming Soon</h1>
        </Box>
		</div>
    {/* <Item/> */}
    <Footer/>
</>;
}

/* 
arrow: Down arrow icons created by th studio - Flaticon

*/

