import React from 'react';
import "../OMR.css";
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


const OMR = () => {
    return (
        <div className="main" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe 
                src="/omr.pdf"
                style={{ width: '80%', height: '90%', border: 'none', paddingTop: '80px'}}
                title="OMR PDF"
            />
        </div>
    );
};

export default OMR;
