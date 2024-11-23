import React from 'react';
import "../OMR.css";

const OMR = () => {
    return (
        <div className="main" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe 
                src="/omr.pdf"
                style={{ width: '80%', height: '90%', border: 'none', paddingTop: '80px'}}
                title="OMR PDF"
            />
            <embed src="/omr.pdf" width="100%" height="600px" type="application/pdf" />
            <object data="/omr.pdf" width="100%" height="600px" type="application/pdf">
                <p>Your browser doesn’t support PDFs. Please download the PDF to view it: <a href="/your-pdf-url.pdf">Download PDF</a>.</p>
            </object>
        </div>
    );
};

export default OMR;
