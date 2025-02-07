import React from 'react';
import '../../App.css';
import ContactMain from '../ContactMain';
import ContactForm from '../ContactForm';
import Footer from '../Footer';

function Contact () {
    return (
        <>
            <ContactMain/>
            <div className='main-text' style={{margin: '0 0 60px 0'}}></div>
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default Contact;