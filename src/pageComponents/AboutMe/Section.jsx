import React from "react";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from "./Section.module.scss";

export default function Section() {
    return (
        <ul className={styles.contactList}>
            <li>
                <SmartphoneIcon fontSize="large" />
                &nbsp;
                111-111-1111
            </li>

            <li>
                <EmailIcon fontSize="large" />
                &nbsp;
                exampleemail@hotmail.com
            </li>

            <li>
                <LinkedInIcon  fontSize="large" />
                &nbsp;
                linkedin.com/in/riki-russell/
            </li>
        </ul>
    );
}