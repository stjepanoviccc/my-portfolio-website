import React from 'react'
import Wrap from './Wrap'
import Card from "./Card";
import styles from "../scss/components/Projects.module.scss";
import headerStyles from "../scss/components/Headers.module.scss";

const Projects = () => {
    return (
        <Wrap extendClassName={styles.wrapExtendForProjects}>
            <div className={headerStyles.headerWrap}>
                <h2 id="projects" className={headerStyles.h2}>My Projects</h2>
            </div>
            <div className={styles.projectsHolder}>
                <Card img="/projects-imomment.jpg" title="Imomment QR" desc="Digital albums with QR code feature involved and multiple panels for each user" technologies="NEXTJS TAILWINDCSS NESTJS GRAPHQL POSTGRESQL DOCKER" href="imomment.com/en/"/>
                <Card img="/projects-gsp-shop.jpg" title="Gastro Servis Plus Shop" desc="Custom web shop made for client in nextjs and springboot" technologies="NEXTJS TAILWINDCSS SPRINGBOOT POSTGRESQL DOCKER" href="gastroservisplus.ba/"/>
                <Card img="/projects-fitness.svg" title="Sitpass" desc="Fitness web app with many features involved (uni fullstack project)" technologies="ANGULAR TAILWINDCSS SPRINGBOOT HIBERNATE POSTGRESQL DOCKER JUNIT JASMINE" href="github.com/stjepanoviccc/sitpass"/>
                <Card img="/projects-hospital-event.jpg" title="Hospital Event Scheduling" desc="Hospital event scheduling system - MERN stack" technologies="MONGODB EXPRESSJS REACT NODE DOCKER TAILWINDCSS" href="github.com/stjepanoviccc/hospital-event-scheduling"/>
                <Card img="/projects-ems-api.svg" title="EMS API" desc="Employee Management System API" technologies="SPRINGBOOT POSTGRESQL HIBERNATE DOCKER JUNIT MOCKITO MOCKMVC LIQUIBASE RABBITMQ SWAGGER" href="github.com/stjepanoviccc/employee-management-system"/>
                <Card img="/projects-ccs-api.svg" title="CCS API" desc="Centralized Configuration Service API" technologies="GOLANG CONSUL PROMETHEUS DOCKER SWAGGER JAEGER" href="github.com/stjepanoviccc/centralized-configuration-service" />
                <Card img="/projects-plazmica.jpg" title="Plazmica" desc="Custom restaurant website made with plain html and css for client" technologies="HTML CSS JAVASCRIPT" href="plazmica.com/" />
                <Card img="/projects-sticko.svg" title="Šticko Plast" desc="Website for sales and installation of PVC and Aluminum joinery" technologies="NEXTJS TAILWINDCSS" href="sticko-plast.com/" />
                <Card img="/projects-organic.svg" title="Organic Shop" desc="Astra Theme(WordPress) template for Organic Shop made in React" technologies="REACT SASS FIREBASE" href="organic-shop-react.netlify.app/" />
            </div>
            <a className={styles.repoLink} href="https://github.com/stjepanoviccc?tab=repositories" target="_blank" rel="noreferrer">See more projects on github(for devs)</a>
            <a className={styles.repoLink} href="https://thunderwavedigital.com/en" target="_blank" rel="noreferrer">See more hosted apps/websites</a>
        </Wrap>
    )
}

export default Projects;
