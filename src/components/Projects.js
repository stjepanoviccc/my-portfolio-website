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
                <Card isNew={true} img="/projects-quiz.jpg" title="iQuiz App" desc="Computer Science Quiz MERN stack" technologies="MONGODB EXPRESSJS REACT NODE DOCKER" href="github.com/stjepanoviccc/iquiz-app"/>
                <Card isNew={true} img="/projects-api.jpg" title="BCPP Web API" desc="Benefit Card Payment Processor Web API" technologies="SPRINGBOOT POSTGRESQL HIBERNATE DOCKER JUNIT MOCKITO" href="github.com/stjepanoviccc/benefit-card-payment-processor"/>
                <Card img="/projects-sticko.jpg" title="Šticko Plast" desc="Website for sales and installation of PVC and Aluminum joinery." technologies="NEXTJS TAILWINDCSS" href="sticko-plast.com"/>
                <Card img="/projects-asstart.jpg" title="AS Start Prijedor" desc="Portfolio Website for Driving School in Prijedor in BiH." technologies="NEXTJS TAILWINDCSS" href="asstartprijedor.com"/>
                <Card img="/projects-tastar.jpg" title="Travel Agency STAR" desc="CMS template for Travel Agency Star. MVC Architecture" technologies="SPRINGBOOT THYMELEAF JQUERY TAILWINDCSS MYSQL" href="github.com/stjepanoviccc/travel-agency-star"/>
                <Card img="/projects-urbanhunt.jpg" title="Urban Hunt" desc="CMS template for Real Estate Agencies. REST Api with real-time communication" technologies="NODE SPRINGBOOT REACT TAILWINDCSS MYSQL" href="github.com/stjepanoviccc/urban-hunt-backend"/>
                <Card img="/projects-hotelres.jpg" title="Hotel Reservations" desc="WPF template app for Hotel Reservations. Only one instance of Hotel(singleton)" technologies="C# WPF MSSQL" href="github.com/stjepanoviccc/hotel-reservation-wpf"/>
                <Card img="/projects-organic.jpg" title="Organic Shop" desc="Astra Theme(WordPress) template for Organic Shop made in React" technologies="REACT SASS FIREBASE" href="organic-shop-react.netlify.app/"/>
            </div>
            <a className={styles.repoLink} href="https://github.com/stjepanoviccc?tab=repositories" target="_blank" rel="noreferrer">And many other...</a>
        </Wrap>
    )
}

export default Projects;
