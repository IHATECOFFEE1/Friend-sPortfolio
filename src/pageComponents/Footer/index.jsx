import React from "react";
import { ContactUs } from "./ContactUs";
import styles from "./index.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                <h2>Get in Touch</h2>
                <h3>
                    Open for Commissions
                    <br />
                    Discord: Kami#1787
                </h3> 
                <p>
                    Don't like forms? Send me an  <a href={`mailto: rikirussell@knights.ucf.edu`}>email</a>. 👋
                </p>   
            </div>

            <ContactUs />
        </footer>
    );
}
