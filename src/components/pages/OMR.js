import React from 'react';
import "../OMR.css";
import Footer from '../Footer';

const OMR = () => {
    return (
        <>
         <div className='main-all'>
    <div className='name' style={{fontSize:'8vmin', fontFamily: 'Montserrat', color: '#fff', textShadow: '3px 2px #6C3092'}}>
      Outcomes Management Report
        </div> 
    </div>
    <div className='main-text' style={{margin: '0 0 60px 0'}}></div>
    <div className="main" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <iframe 
                src="https://okincbucket.s3.us-east-1.amazonaws.com/OMR2023"
                style={{ width: '80%', height: '90%', border: 'none', paddingTop: '20px'}}
                title="OutcomesManagementReportPDF"
                />
        </div>    
        <Footer/>
    </>
    );
};

export default OMR;