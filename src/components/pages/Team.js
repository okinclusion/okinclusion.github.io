import React from "react";
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';   


export default function Team() {
    return <> 
    <div className='main-all'>
      
    <div className='name' style={{fontSize:'8vmin', fontFamily: 'Montserrat', color: '#fff', textShadow: '3px 2px #6C3092'}}>
      Meet The Team
        </div> 
    </div>
    <div className='main-text' style={{margin: '0 0 60px 0'}}></div>
    <Cards/>
    <Footer/>
</>;
}