import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation';  
import InclusionItem from '../InclusionItem';
import '../InclusionItem.css';
import MapView from '../MapView';

function Keremeos() {
    const center = [49.204750, -119.828480];

    return <> 
    <div className='main-all'>
    <div className='name' style={{fontSize:'8vmin', fontFamily: 'Montserrat', color: '#fff', textShadow: '3px 2px #6C3092'}}>
        Keremeos
        </div> 
    </div>
    <div className='main-text' style={{margin: '0 0 60px 0'}}></div>
    <div className='container'>
    <InclusionItem
        hours=' Tuesday: 9:30am to 1:30pm' 
        hours2= 'Wednesday to Friday: 9:30am to 2:30pm'
        phone=' (250) 499-2399'
        fax=' (250) 499-5662'
        email=' keremeos.ok.inclusion@shaw.ca'
        address=' 427 7th Avenue, Keremeos, BC V0X 1N3'/>
        <MapView center={center}/>
    </div>
    <Footer/>
</>;
}
export default Keremeos;