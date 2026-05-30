import React from 'react'
import Wrap from './Wrap'
import styles from "../scss/components/Hero.module.scss";
import btnStyles from "../scss/components/Button.module.scss";

const Hero = () => {
    return (
        <Wrap extendClassName={styles.wrapExtendForHero}>
            <h3 className={styles.h3}>Hi! My name is <span className={styles.important}>Andrej</span></h3>
            <h1 className={styles.h1}>And I'm <span className={styles.important}>Software Developer</span></h1>
            <h4 className={styles.h4}>I've been building software professionally for a few years, with the deepest experience in the medical industry, having worked on both decentralized systems and integrated EHR platforms connected to those systems. Beyond healthcare, I deliver across different domains, from web shops to full-stack platforms, with a focus on clean code and results that actually matter.</h4>
            <div className={styles.buttonHolder}>
                <a href="#projects" className={btnStyles.btn + " " + btnStyles.buttonFill}>My Projects</a>
                <a href="#contact" className={btnStyles.btn + " " + btnStyles.buttonGhost}>Contact Me</a>
            </div>
        </Wrap>
    )
}

export default Hero
