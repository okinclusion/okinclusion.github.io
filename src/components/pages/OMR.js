import React from 'react';
import "../OMR.css";

const OMR = () => {
    return (
        <div className="main" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <iframe 
                src="https://okincbucket.s3.us-east-1.amazonaws.com/OMR2023"
                style={{ width: '80%', height: '90%', border: 'none', paddingTop: '80px'}}
                title="OMR PDF"
                title="OutcomesManagementReportPDF"
                />
        </div>
    );
};

export default OMR;