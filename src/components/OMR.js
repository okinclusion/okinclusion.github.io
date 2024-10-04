import React from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import '../App.css';

// Configure the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = () => {
  const pdfURL = process.env.PUBLIC_URL + '/files/OMR.pdf'; // Make sure this file is in the public folder

  return (
    <div>
      <h2>PDF Viewer</h2>
      <Document file={pdfURL}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PDFViewer;
