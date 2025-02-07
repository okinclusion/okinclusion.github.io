import React from 'react';
import "../OMR.css";
import Footer from "../Footer";

const Scope = () => {
    return (
        <>
         <div className='main-all'>
    <div className='name' style={{fontSize:'8vmin', fontFamily: 'Montserrat', color: '#fff', textShadow: '3px 2px #6C3092'}}>
      Scope of Services
        </div> 
    </div>
    <div className='main-card main-text'>
        <div className="main" style={{ height: '130vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe 
                src="https://okincbucket.s3.us-east-1.amazonaws.com/ScopeOfServices"
                style={{ width: '80%', height: '90%', border: 'none', paddingTop: '20px'}}
                title="ScopeOfServicesPDF"
                />
        </div>
        </div>
        <Footer/>
        </>
    );
};

export default Scope;
