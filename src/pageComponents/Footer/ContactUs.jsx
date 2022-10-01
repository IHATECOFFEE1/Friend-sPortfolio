import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactUs.module.scss';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x72mkml', 'template_1b39sls', form.current, '-CRUZfr8VIVOqKiVu')
            .then((result) => {
                alert(result.text);
            }, (error) => {
                alert(error.text);
            });
        
        e.target.reset();
    };

    return (
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <input className={styles.formStyle} type="text" name="user_name" placeholder="Full Name" required />
            <input className={styles.formStyle} type="email" name="user_email" placeholder="Email" required />
            <input className={styles.formStyle} type="text" name="subject" placeholder="Subject" required />
            <textarea className={styles.message} name="message" placeholder="Message" required rows={5}/>
            <button type="submit">
                Send
            </button>
        </form>
    );
};