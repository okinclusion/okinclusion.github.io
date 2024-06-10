import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function EmploymentForm() {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service 
    emailjs.sendForm('service_vvxcblm', 'template_ijg3p4h', form.current, 
    'TInXkn9D4lftKds5g')
      .then((result) => {
          console.log(result.text);
          alert('Application Sent!')
      }, (error) => {
          console.log(error.text);
          alert('Error');
      });
    };

  return (
    <div className='container'>
        <div className='contact-container'>
            <h1 className='messageTitle'>Send Us Your Resume</h1>
            <form ref={form} onSubmit={sendEmail}>
                <label className='name'>Name:</label>
                <br/>
                <input type="text" name="user_name" />
                <br/>
                <br/>
                <label className='email'>Email:</label>
                <br/>
                <input type="email" name="user_email" />
                <br/>
                <br/>
                <input className='file' type="file" name="file" id="file"/>
                <br/>
                <br/>
                <input className='btn-submit' type="submit" value="Send" />
            </form>
        </div>
    </div>
    );
};

export default EmploymentForm;
