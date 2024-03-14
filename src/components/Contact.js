import React from 'react'
import Wrap from './Wrap'
import styles from "../scss/components/Contact.module.scss";
import headerStyles from "../scss/components/Headers.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faViber } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Contact = () => {
    return (
        <Wrap extendClassName={styles.wrapExtendForContact}>
            <div className={headerStyles.headerWrap}>
                <h2 id="contact" className={headerStyles.h2}>Contact Me</h2>
            </div>
            <div className={styles.contactInfoWrap}>
                <div className={styles.contactItem}>
                    <FontAwesomeIcon icon={faLinkedin} className={styles.icon}/>
                    <h5 className={styles.contactTitle}>LinkedIn:</h5>
                    <a className={styles.contactLink} href="https://www.linkedin.com/in/andrej-stjepanovic/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/andrej-stjepanovic/</a>
                </div>
                <div className={styles.contactItem}>
                    <FontAwesomeIcon icon={faInstagram} className={styles.icon}/>
                    <h5 className={styles.contactTitle}>Instagram:</h5>
                    <a className={styles.contactLink} href="https://www.instagram.com/andrejstjepanovicc/" target="_blank" rel="noreferrer">https://www.instagram.com/andrejstjepanovicc/</a>
                </div>
                <div className={styles.contactItem}>
                    <FontAwesomeIcon icon={faViber} className={styles.icon}/>
                    <h5 className={styles.contactTitle}>Viber:</h5>
                    <a className={styles.contactLink} href="https://www.instagram.com/andrejstjepanovicc/" target="_blank" rel="noreferrer">https://www.instagram.com/andrejstjepanovicc/</a>
                </div>
                <div className={styles.contactItem}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                    <h5 className={styles.contactTitle}>Gmail:</h5>
                    <p className={styles.mail}>stjepanoviccc2021@gmail.com</p>
                </div>
            </div>
           
        </Wrap>
    )
}

export default Contact
