import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const contact = () => {

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ilo99zn', 'template_gw0zcl4', form.current, '3mjMUIZW2J6cXdBFB')
        e.target.reset()
          };
    return (
        <section id='contact'>
            <h5> Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                <article className="contact_option">
                    <MdOutlineEmail className='contact-option-icon'/>
                    <h4>Email</h4>
                    <h5>ramonm85@gmail.com</h5>
                    <a href="mailto:ramonm85@gmail.com" target={'_blank'}>Send A Message</a>
                </article>
                <article className="contact_option">
                    <FaFacebookMessenger className='contact-option-icon'/>
                    <h4>Messenger</h4>
                    <h5>Messenger</h5>
                    <a href="https://m.me/ramonm85" target={'_blank'}>Send A Message</a>
                </article>
                <article className="contact_option">
                    <FaWhatsapp className='contact-option-icon'/>
                    <h4>Call or Text</h4>
                    <h5>(646)912-0384</h5>
                    <a href="tel:646-912-0384" target={'_blank'}>Send A Message</a>
                </article>
            </div>
            {/* END OF CONTACT OPTION */}
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name'placeholder='Your Full Name'required />
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'> Send Message</button>
            </form>
            </div>
            </section>
    )
}

export default contact
