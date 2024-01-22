
import { React, useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';       
import backgroundVideo from '../videos/snow.mp4';
import Footer from './Footer';

function Apply() { 
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://your-server-endpoint', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            console.log('File uploaded sucessfully.');
        } else {
            console.error('File upload failed.');
        }
    } catch (error) {
        console.error('Error', error);
    }
  };

  return (
    <>
        <div className='main-container'>
            <video autoPlay loop muted playsInline>
            <source src={backgroundVideo} type='video/mp4' alt='Video by 33studiodesign from Pixabay'/>
            </video>
            <div className='responsive-type-animation'>
            <TypeAnimation className='name' sequence={["Home Share Provider", 1000]} speed={20} style={{ fontSize: '10vmin', fontFamily: 'Tahoma', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
            </div> 
        </div>
        <div className='main-card'>
            <form onSubmit={handleSubmit}>
                <input type='file' onChange={handleFileChange}/>
                <button type='submit'>Upload File</button>
            </form>
        </div>
        <Footer/>
    </>
  )
};

export default Apply;
