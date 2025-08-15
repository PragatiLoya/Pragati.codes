import React, { useRef, useState} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
const [status, setStatus] = useState('');
     const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cdkqrai', 'template_jxuxors', form.current, {
        publicKey: 'lmHe2aKOJ7kJBHFtM',
      })
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent!");
          form.current.reset(); // clear form
        },
        (error) => {
          setStatus('Failed to send message: ' + error.text);
        }
      );
  };
  return (
    <section id="contact">
        <h2 className='contactheading'>Contact Me</h2>
        <p className='contactdesc'> Please fill out the form below to discuss any work opportunities.!</p>

        <form className='contactdeets' ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder='Your name' className='contactdeetsname'></input><br></br>
            <input type="email" name="from_email" placeholder='Your Email' className='contactdeetsemail'></input><br></br>
            <input type="textarea" name='message' placeholder='Your message' className='contactdeetsmsg'></input>
            <button className='navbarcontact'>
               
                Submit
            </button>


            




        </form>
        
      {status && <p style={{ marginTop: '10px' }}>{status}</p>}
    </section>
  )
}

export default Contact