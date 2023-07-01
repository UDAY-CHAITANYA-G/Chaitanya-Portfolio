import React, { useState } from "react";
import './contact.css';
import emailjs from '@emailjs/browser';
import {useRef} from "react";

import { motion } from "framer-motion";

const Contact=() => {


    const form = useRef();

    const [done,setDone] = useState(false);


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_d1iybvo', 'template_khq4spk', form.current, '2GvQCiMNlJmPpCO-p')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    
    return(
        <div className="contact" id="Contact"> 
            <motion.div initial={{x:-200}}
            whileInView={{ x:0}}
            transition={{duration:0.5}} className="l-contact">
            <p>Get in Touch</p>
            <h2>Contact ME</h2>
            </motion.div>

            <motion.div initial={{x:200}}
            whileInView={{ x:0}}
            transition={{duration:0.5}} className="r-contact">
                <form ref={form} onSubmit = {sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea  name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button n-btn"/>
                    <span>{done && "Thanks you"}</span>
                </form>
            </motion.div>





            <div className="blur1" style={{
                background: ' #F5C32C',
                top:'222rem',
                left:'-15%',
                width:'25rem',
                height:'25rem'
                }}>
            </div>
        </div>
    )
}

export default Contact;