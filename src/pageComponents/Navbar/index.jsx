import React, { useEffect, useState } from "react";
import Link from "next/link";
import SideNavbarWrapper from "./SideNavbarWrapper";
import styles from "./index.module.scss";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    let lastScrollY = 0;

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
            setHidden(true);
        } else {
            setHidden(false);   
        }

        lastScrollY = window.scrollY;
    }

    useEffect(() => {   
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        }
    }, []);

    return (
        <div className={hidden ? [styles.navbar, styles.navHidden].join(" ") : styles.navbar}>
            <Link className={styles.link} href="/">
                <div className={styles.logo}> LOGO <span> Riki Russell </span> </div>
            </Link>


            <ul className={styles.navbarItems}>
                <li>
                    <Link className={styles.link} href="/"> Home </Link>
                </li>
                <li>
                    <Link className={styles.link} href="/Projects"> Projects </Link>
                </li>
                <li>
                    <Link className={styles.link} href="/AboutMe"> About Me </Link>
                </li>
                <li>
                    <Link className={styles.link} href="/Resume"> Resume </Link>
                </li>
            </ul>

            <SideNavbarWrapper className={styles.sideNavbarWrapper}/>
        </div>
    );
}