import React, { useState } from "react";
import emailjs from "emailjs-com";   

function UploadForm() {
  const [file, setFile] = useState(null);

  emailjs.sendForm('service_vvxcblm', 'template_ijg3p4h').then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );

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
