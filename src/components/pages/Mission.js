import React from "react";
import '../../App.css';
import '../Item.css';
import { Box } from '@mui/material';
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation';  

export default function Mission() {
    return <> 
    <div className='main-all'>
        <div className='responsive-type-animation1'>
          <TypeAnimation className='name' sequence={["Mission + Vision", 1000]} speed={20} style={{ fontSize: '12vmin', fontFamily: 'Montserrat', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
        </div> 
    </div>
    <div className='main'>
      <Box textAlign="center" className="background" fontFamily="Tahoma" fontSize="3vmin" p={1} padding={"50px 30px"}>
			  
          <p className="p"><b className="ap">Mission:</b> We support adults with developmental disabilities to participate meaningfully in all aspects of community life.</p>
        
        <br/>
          <p className="p"><b className="ap">Vision:</b> Okanagan Inclusion envisions a community in which all individuals are included, accepted and valued.</p>
      </Box>
		</div>
    {/* <Item/> */}
    <Footer/>
</>;
}

/* 
arrow: Down arrow icons created by th studio - Flaticon

*/

