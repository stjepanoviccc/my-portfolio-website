import React from 'react'
import Wrap from './Wrap'
import styles from "../scss/components/Hero.module.scss";
import btnStyles from "../scss/components/Button.module.scss";

const Hero = () => {
    return (
        <Wrap extendClassName={styles.wrapExtendForHero}>
            <h3 className={styles.h3}>Hi! My name is <span className={styles.important}>Andrej</span></h3>
            <h1 className={styles.h1}>And I'm <span className={styles.important}>Software Developer</span></h1>
            <h4 className={styles.h4}>My goal is to continuously improve as a Software Developer by working on meaningful projects, contributing to high-quality software, and completing my Software Engineering degree with excellence.</h4>
            <div className={styles.buttonHolder}>
                <a href="#projects" className={btnStyles.btn + " " + btnStyles.buttonFill}>My Projects</a>
                <a href="#contact" className={btnStyles.btn + " " + btnStyles.buttonGhost}>Contact Me</a>
            </div>
        </Wrap>
    )
}

export default Hero
