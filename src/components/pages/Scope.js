import React from 'react';
import "../OMR.css";

const Scope = () => {
    return (
        <div className="main" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe 
                src="https://okincbucket.s3.us-east-1.amazonaws.com/ScopeOfServices"
                style={{ width: '80%', height: '90%', border: 'none', paddingTop: '80px'}}
                title="ScopeOfServicesPDF"
                />
        </div>
    );
};

export default Scope;
