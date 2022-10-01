import React from "react";
import Image from "next/image";
import Section from "./Section";
import FAQ from "./FAQ";
import styles from "./index.module.scss";

export default function AboutMe() {
    return (
        <div className={styles.aboutMeSection} id="aboutme" >
            <div className={styles.contactPicDiv}>
                <div className={styles.pictureDiv}>
                    <Image src="/RikiPic.png" width={280} height={330} alt="Riki Russell" />
                </div>

                <Section/>
            </div>
            <FAQ />
        </div>
    );
}
