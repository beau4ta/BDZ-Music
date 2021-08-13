import React from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_nlcuvv3', 'template_0y102c9', e.target, 'user_chRW4wSjncPZQsX9SHv72')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          alert('Message Sent!');
          e.target.reset();
      }
    
      return (
          <div className='d-flex flex-column align-items-center'>
              <h1 className='contact-title'>E-mail me if you are interested in working together!</h1>
          <div className='contact-container col-4 d-flex justify-content-center'>
        <form className="contact-form d-flex flex-column" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="name" /><br/>
          <label>Email</label>
          <input type="email" name="email" /><br/>
          <label>Message</label>
          <textarea name="message" /><br/>
          <button className='send-btn' type="submit" value="Send">Send</button>
        </form>
        </div>
        </div>
      );
}

export default Contact;