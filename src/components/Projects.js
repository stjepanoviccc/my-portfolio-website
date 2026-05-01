import React from 'react'
import Wrap from './Wrap'
import Card from "./Card";
import styles from "../scss/components/Projects.module.scss";
import headerStyles from "../scss/components/Headers.module.scss";

const gastroStats = [
    { value: "#1", label: "Google ranking", sublabel: "for 'servis ugostiteljske opreme' in BiH" },
    { value: "#1", label: "AI search", sublabel: "appears first in ChatGPT results" },
    { value: "<1s", label: "Load speed", sublabel: "Under one second" }
];

const infiniteStats = [
    { value: "AI", label: "Bouquet builder", sublabel: "Generates arrangements from user preferences" },
    { value: "100%", label: "Custom built", sublabel: "No templates, no page builders" },
    { value: "Full", label: "Stack", sublabel: "Frontend to backend, end to end" }
];

const Projects = () => {
    return (
        <Wrap extendClassName={styles.wrapExtendForProjects}>
            <div className={headerStyles.headerWrap}>
                <h2 id="projects" className={headerStyles.h2}>My Projects</h2>
            </div>
            <p className={styles.projectsIntro}>These are my two favourite private projects I can share: one that reached #1 on Google, and one with a genuinely interesting AI feature. There's a lot more work that can't be shown publicly, but the links below give a wider picture.</p>
            <div className={styles.projectsHolder}>
                <Card
                    label="REAL RESULT"
                    headline="Gastro Servis Plus: from online shop to #1 for service searches"
                    stats={gastroStats}
                    desc="Gastro Servis Plus started as an online shop for catering equipment. As the business evolved, the focus shifted to servicing and repairing catering equipment, and the website needed to follow. We rebuilt the site around the service offering, with local SEO targeting, fast load times, and content structured around what clients actually search for. The result: Gastro Servis Plus now ranks first on Google for 'servis ugostiteljske opreme', and is also the first result returned by AI search tools like ChatGPT when users ask about catering equipment service."
                    img="/images/gastro-servis-plus-pretraga.png"
                    img2="/images/gastro-servis-plus-AI-pretraga.png"
                    technologies="NEXTJS TAILWINDCSS SPRINGBOOT POSTGRESQL DOCKER"
                    href="gastroservisplus.ba/"
                />
                <Card
                    label="AI FEATURE"
                    headline="Infinite Gifts: gift shop with an AI-powered bouquet builder"
                    stats={infiniteStats}
                    desc="Infinite Gifts is a full e-commerce gift shop with a feature that stands out: an AI-powered bouquet builder that generates flower arrangements based on the user's preferences, occasion, and budget. Beyond that, the platform handles product catalog, cart management, and a smooth checkout. Built from scratch with a custom backend, no third-party platforms, no shortcuts."
                    img="/images/infinite-gifts-shop-1.webp"
                    img2="/images/infinite-gifts-shop-2.webp"
                    technologies="NEXTJS TAILWINDCSS NESTJS POSTGRESQL DOCKER"
                    href="infinitegifts.shop/"
                />
            </div>
            <div className={styles.ctaRow}>
                <a className={styles.ctaGhost} href="https://github.com/stjepanoviccc?tab=repositories" target="_blank" rel="noreferrer">
                    <span className={styles.ctaIcon}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    </span>
                    More on GitHub
                </a>
                <a className={styles.ctaFill} href="https://thunderwavedigital.com/en" target="_blank" rel="noreferrer">
                    More live apps & websites →
                </a>
            </div>
        </Wrap>
    )
}

export default Projects;
