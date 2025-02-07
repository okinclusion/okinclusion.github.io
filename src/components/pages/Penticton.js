import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation';  
import InclusionItem from '../InclusionItem.js';
import '../InclusionItem.css';
import MapView from '../MapView';


function Penticton() {
    const center = [49.495461, -119.589828];

    return (
    <> 
    <div className='main-all'>
    <div className='name' style={{fontSize:'8vmin', fontFamily: 'Montserrat', color: '#fff', textShadow: '3px 2px #6C3092'}}>
        Penticton
        </div> 
    </div>
    <div className='main-text' style={{margin: '0 0 60px 0'}}></div>
    <div className='container'>
        <InclusionItem
        hours=' Monday to Friday: 8:30am to 4:30pm'
        phone=' (236) 422-0055'
        fax=' (236) 422-0056'
        email=' okinclusion@shaw.ca'
        address=' 527 Ellis Street, Penticton, BC V2A 4M4'/>
        <MapView center={center}/>
    </div>
    <Footer/>
</>
)
}
export default Penticton;