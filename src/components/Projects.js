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
                <Card img="/projects-ems-api.svg" title="EMS API" desc="Employee Management System API" technologies="SPRINGBOOT POSTGRESQL HIBERNATE DOCKER JUNIT MOCKITO MOCKMVC LIQUIBASE RABBITMQ SWAGGER" href="github.com/stjepanoviccc/employee-management-system"/>
                <Card img="/projects-ccs-api.svg" title="CCS API" desc="Centralized Configuration Service API" technologies="GOLANG CONSUL PROMETHEUS DOCKER SWAGGER JAEGER" href="https://github.com/stjepanoviccc/centralized-configuration-service"/>
                <Card img="/projects-api.jpg" title="BCPP API" desc="Benefit Card Payment Processor API" technologies="SPRINGBOOT POSTGRESQL HIBERNATE DOCKER JUNIT MOCKITO" href="github.com/stjepanoviccc/benefit-card-payment-processor"/>
                <Card img="/projects-sticko.svg" title="Šticko Plast" desc="Website for sales and installation of PVC and Aluminum joinery" technologies="NEXTJS TAILWINDCSS" href="sticko-plast.com"/>
                <Card img="/projects-asstart.svg" title="AS Start Prijedor" desc="Portfolio Website for Driving School in Prijedor in BiH" technologies="NEXTJS TAILWINDCSS" href="asstartprijedor.com"/>
                <Card img="/projects-quiz.jpg" title="iQuiz App" desc="Computer Science Quiz MERN stack" technologies="MONGODB EXPRESSJS REACT NODE DOCKER TAILWINDCSS" href="github.com/stjepanoviccc/iquiz-app"/>
                <Card img="/projects-tastar.svg" title="Travel Agency STAR" desc="CMS template for Travel Agency Star. MVC Architecture" technologies="SPRINGBOOT THYMELEAF JQUERY TAILWINDCSS MYSQL" href="github.com/stjepanoviccc/travel-agency-star"/>
                <Card img="/projects-urbanhunt.svg" title="Urban Hunt" desc="CMS template for Real Estate Agencies. REST Api with real-time communication" technologies="NODE SPRINGBOOT REACT TAILWINDCSS MYSQL" href="github.com/stjepanoviccc/urban-hunt-backend"/>
                <Card img="/projects-organic.svg" title="Organic Shop" desc="Astra Theme(WordPress) template for Organic Shop made in React" technologies="REACT SASS FIREBASE" href="organic-shop-react.netlify.app/"/>
            </div>
            <a className={styles.repoLink} href="https://github.com/stjepanoviccc?tab=repositories" target="_blank" rel="noreferrer">View more  ...</a>
        </Wrap>
    )
}

export default Projects;
