import React from 'react'
import Wrap from "./Wrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from "../scss/components/Footer.module.scss";

const Footer = () => {
    return (
        <Wrap extendClassName={styles.footerWrap}>
            <p className={styles.copyright}>All rights reserved &copy; 2024 Andrej Stjepanović</p>
            <div className={styles.socialHolder}>
                <a href="https://www.linkedin.com/in/andrej-stjepanovic/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} /></a>
                <a href="https://github.com/stjepanoviccc" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className={styles.socialIcon} /></a>
                <a href="https://www.instagram.com/andrejstjepanovicc/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} /></a>
            </div>
        </Wrap>
    )
}

export default Footer
