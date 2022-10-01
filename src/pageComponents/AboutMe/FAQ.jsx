import React from "react";
import QA from "./QA";
import styles from "./FAQ.module.scss";

export default function FAQ() {
    return (
        <div className={styles.faqDiv}>
            <h1 className={styles.title}> About Me: Questions </h1>
            <QA question=" Why Me?" answer=" My art is able to reflect a very wide variety of art styles and is able to create recognizable characters and figures. I have a lot of experience working in digital art with well over 8 years doing so." />
            <QA question=" How long have you been doing art?" answer=" I have been drawing since I was X years old. I has been X years that I have been doing digital art." />
            <QA question=" Have you ever been part of team enviroment" answer="My name is Riki Russell. I'm a software engineer based in the Bay Area. I'm passionate about building web applications and creating beautiful user experiences. I'm currently looking for a position in the Bay Area." />
            <QA question=" What are your strengths and weaknesses?" answer="My name is Riki Russell. I'm a software engineer based in the Bay Area. I'm passionate about building web applications and creating beautiful user experiences. I'm currently looking for a position in the Bay Area." />
            <QA question=" Where do you live? Are you willing to move?" answer=" I live near by University of Central Florida (UCF) in Florida, Orlando. Yes, I would be willing to move out of state." />
        </div>
    );
}