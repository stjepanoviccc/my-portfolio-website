import React from 'react'
import styles from "../scss/components/Card.module.scss";

const Card = ({ img, title, desc, technologies, href }) => {
    return (
        <div className={styles.card}>
            <a href={"https://" + href} target="_blank" rel="noreferrer">
                <img className={styles.cardImage} src={img} alt="card-img"></img>
            </a>
            <div className={styles.contentWrap}>
                <h4 className={styles.cardTitle}>{title}</h4>
                <p className={styles.cardDescription}>{desc}</p>
                <p className={styles.cardTechnologies}>{technologies}</p>
                <a className={styles.cardLink} href={"https://" + href} target="_blank" rel="noreferrer">See more info</a>
            </div>
        </div>
    )
}

export default Card
