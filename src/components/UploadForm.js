import React, { useState } from "react";
import emailjs from "emailjs-com";   

function UploadForm() {
  const [file, setFile] = useState(null);


  const handleSubmit = (event) => {
    event.preventDefault();

    //We need to convert the file to base64 so we use the inbuilt javascript 
    // FileReader class
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async (e) => {

    const serviceId = "service_vvxcblm";
    const templateId = "template_ijg3p4h";
    // const userId = "TInXkn9D4lftKds5g"; 

    emailjs.sendForm(serviceId, templateId)
    .then((result) => {
        console.log(result);    
        alert('message sent');
    }, (error) => {
        console.log(error)
        alert('error');
    })
    }
  };

  return (
    <form id="form">
        <div class="field">
            <label for="from_name">from_name</label>
            <input type="text" name="from_name" id="from_name"/>
        </div>
        <div class="field">
            <label for="to_name">to_name</label>
            <input type="text" name="to_name" id="to_name"/>
        </div>
        <div class="field">
            <label for="reply_to">reply_to</label>
            <input type="text" name="reply_to" id="reply_to"/>
        </div>
        <div class="field">
            <label for="file">file</label>
            <input type="file" name="file" id="file"/>
        </div>

        <input type="submit" id="button" value="Send Email" />
    </form>
    );
};

export default UploadForm;
