import React, { useState, useEffect } from 'react'
import useCheckDevice from '../custom-hooks/CheckDevice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import Wrap from './Wrap'
import styles from "../scss/components/Nav.module.scss";

const Navbar = () => {
    const checkDevice = useCheckDevice();
    const [windowWidth, setWindowWidth] = useState(1280);
    const [isActive, setIsActive] = useState(false);
    const toggleNavbar = () => {
        setIsActive(prev => !prev);
    }

    useEffect(() => {
        setWindowWidth(prev => checkDevice);
        if (checkDevice >= 1280) {
            setIsActive(true);
        }
        if (isActive && windowWidth < 1280) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [checkDevice, isActive, windowWidth])

    return (
        <Wrap extendClassName={styles.wrapExtendForNav}>
            <a onClick={() => windowWidth < 1280 && toggleNavbar} href="/" className={`${windowWidth < 1280 ? styles.myLinkSmall : styles.myLinkDesktop}`} style={{ fontSize: '1.5rem' }}>AS PORTFOLIO</a>
            {windowWidth < 1280 && (
                <button type="button" onClick={toggleNavbar}>
                    <FontAwesomeIcon icon={faBars} className={styles.burgerMenu} />
                </button>
            )}
            <nav className={`${styles.nav} ${windowWidth >= 1280 ?
                styles.navDesktop :
                `${styles.navSmall} ${!isActive ? styles.navInactive : styles.navActive}`}`}>
                <a onClick={() => windowWidth < 1280 && toggleNavbar} href="/" className={`${windowWidth < 1280 ? styles.myLinkSmall : styles.myLinkDesktop}`}>HOME</a>
                <a onClick={() => windowWidth < 1280 && toggleNavbar} href="#projects" className={`${windowWidth < 1280 ? styles.myLinkSmall : styles.myLinkDesktop}`}>PROJECTS</a>
                <a onClick={() => windowWidth < 1280 && toggleNavbar} href="#contact" className={`${windowWidth < 1280 ? styles.myLinkSmall : styles.myLinkDesktop}`}>CONTACT</a>
                <div className={styles.socialHolder}>
                    <a href="https://www.linkedin.com/in/andrej-stjepanovic/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} /></a>
                    <a href="https://github.com/stjepanoviccc" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className={styles.socialIcon} /></a>
                    <a href="https://www.instagram.com/andrejstjepanovicc/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} /></a>
                </div>
            </nav>
        </Wrap>
    )
}

export default Navbar
