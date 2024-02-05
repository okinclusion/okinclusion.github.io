import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vvxcblm', 'template_rchefxl', form.current, 'TInXkn9D4lftKds5g')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent!");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <div className='container'>
      <div className='contact-container'>
          <h1 className='messageTitle'>Send Us A Message</h1>
          <div className='holder'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='holder-group'>
                <label className='name'>Name:</label>
                <br/>
                <input className="nameField" required='yes' type="text" name="from_name" style={{fontWeight: 'bolder', fontSize: 'large'}}/>
                <br/>
              </div>
              <div className='holder-group'>
                <label className='email'>Email:</label>
                <br/>
                <input className="emailField" required='yes' type="email" name="from_email" style={{fontWeight: 'bolder', fontSize: 'large'}}/>
                <br/>
              </div>
              <div className='holder-group'>
                <label className='msg'>Message:</label>
                <br/>
                <textarea className='msg-area' required='yes' name="message" style={{fontWeight: 'bolder', fontSize: 'large'}}/>
                <br/>
              </div>
                <input className='btn-submit' type="submit" value="Send" style={{fontWeight: 'bolder'}}/>
            </form>
          </div>
      </div>
    </div>
    </>
  );
};

export default ContactForm;