import React from "react";
import '../../App.css';
import '../Item.css';
import { Box } from '@mui/material';
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation';  

export default function Mission() {
    return <> 
    <div className='main-all'>
        <div className='name' style={{fontSize:'8vmin', fontFamily: 'Montserrat', color: '#fff', textShadow: '3px 2px #6C3092'}}>
          Mission + Vision      
        </div> 
    </div>
    <div className='main'>
    <div className='main-text'></div>
      <Box textAlign="center" className="background" fontFamily="Tahoma" fontSize="3vmin" p={1} padding={"10px 30px"}>
			  
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

