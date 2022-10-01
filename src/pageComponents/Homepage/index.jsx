import React, { useState } from "react";
import Image from "next/image";
import WelcomeCard from "./WelcomeCard";
import styles from "./index.module.scss";
import MockImages from "../../constants/mockImages";
import Modal from "./Modal";

export default function HomePage() {
    const [imgSrc] = useState(MockImages);
    const [imgOpen, setImgOpen] = useState(false);

    const dict = {
        "medium": styles.medium,
        "large": styles.large,
        "tall": styles.tall,
        "wide": styles.wide,
        "wideTall": styles.wideTall,
    };

    return (
        <div className={styles.introductionSection}>
            <div className={styles.introduction}>
                <div className={styles.welcomeDiv}>
                    <WelcomeCard />
                </div>
                {imgSrc.map((img) => (
                    <div className={`${styles.gridDiv} ${dict[img.size]}`} key={img.id} onClick={() => setImgOpen(img.id)}>
                        <Image
                            src={`https://riki-art.s3.us-east-2.amazonaws.com${img.src}`}
                            alt={img.alt}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                ))}
            </div>
            
            { imgOpen &&
                <Modal onClose={setImgOpen}>
                    <Image
                        src={`https://riki-art.s3.us-east-2.amazonaws.com${imgSrc[imgOpen - 1].src}`}
                        alt={imgSrc[imgOpen - 1].alt}
                        layout="fill"
                        objectFit="contain"
                    />
                </Modal>
            }
        </div>
    );
}
