import React from "react";
import styles from "./QA.module.scss";

export default function QA({ question, answer }) {
    return (
        <div className={styles.qaDiv}>
            <h2 className={styles.question}>{question}</h2>
            <p className={styles.answer}>{answer}</p>
        </div>
    );
}