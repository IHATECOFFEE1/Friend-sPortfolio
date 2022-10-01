import React, { useState } from "react";
import Link from "next/link";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import styles from "./SideNavbarWrapper.module.scss";


export default function SideNavbarWrapper() {
    const [isPressed, setIsPressed] = useState(false);
    const handleClick = (prev) => {
        setIsPressed(!prev);
    }

    return (
        <div className={styles.sideNavbarWrapper}>
            <button className={styles.hambugerIcon} type="button" onClick={ () => { handleClick(isPressed) }}> 
                <DensityMediumIcon fontSize="large"/>
            </button>
            
            <ul className={isPressed ? styles.dropDown : [styles.dropDown, styles.hidden].join(" ")}>
                <li>
                    <Link className={styles.link} href="/Projects"> Projects </Link>
                </li>
                <li>
                    <Link className={styles.link} href="/AboutMe"> About Me </Link>
                </li>
                <li>
                    <Link className={styles.link} href="/"> Gallery </Link>
                </li>
                <li>
                    <Link className={styles.link} href="/Resume"> Resume </Link>
                </li>
            </ul>

        </div>
    );
}