import React from "react";
import styles from "./WelcomeCard.module.scss";

export default function WelcomeCard() {
    return (
        <div className={styles.card}>
            <h1> Welcome, </h1>
            <h2>  
                I'm Riki Russell,
                <br />
                a Game Designer.
            </h2>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing eli. Nemo ea dicta te ipsum dolor sit amet consectetur, adipisicing eli. Nemo ea dicta tempora consequatur provident?</p>
        </div>
    );
}
