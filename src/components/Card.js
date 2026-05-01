import React from 'react'
import styles from "../scss/components/Card.module.scss";

const Card = ({ label, headline, stats, desc, technologies, img, img2, href }) => {
    return (
        <div className={styles.card}>
            <p className={styles.cardLabel}>{label}</p>
            <h3 className={styles.cardHeadline}>{headline}</h3>
            <div className={styles.statsRow}>
                {stats && stats.map((stat, i) => (
                    <div key={i} className={styles.stat}>
                        <span className={styles.statValue}>{stat.value}</span>
                        <span className={styles.statLabel}>{stat.label}</span>
                        <span className={styles.statSublabel}>{stat.sublabel}</span>
                    </div>
                ))}
            </div>
            <p className={styles.cardDesc}>{desc}</p>
            <div className={styles.imagesRow}>
                <a href={"https://" + href} target="_blank" rel="noreferrer">
                    <img className={styles.cardImage} src={img} alt={headline} />
                </a>
                <a href={"https://" + href} target="_blank" rel="noreferrer">
                    <img className={styles.cardImage} src={img2} alt={headline + " screenshot 2"} />
                </a>
            </div>
            <div className={styles.cardFooter}>
                <p className={styles.cardTechnologies}>{technologies}</p>
                <a className={styles.cardLink} href={"https://" + href} target="_blank" rel="noreferrer">Visit project →</a>
            </div>
        </div>
    )
}

export default Card
