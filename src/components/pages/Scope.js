import React from 'react';
import "../OMR.css";

const Scope = () => {
    return (
        <div className="main" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe 
                src={`${process.env.PUBLIC_URL}/scopeofservices.pdf`}
                style={{ width: '80%', height: '90%', border: 'none', paddingTop: '80px'}}
                title="OMR PDF"
            />
        </div>
    );
};

export default Scope;
