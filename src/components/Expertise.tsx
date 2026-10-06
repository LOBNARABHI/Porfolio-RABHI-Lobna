import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faAndroid, faJava } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "Socket.IO",
];

const labelsSecond = [
    "Flutter",
    "Dart",
    "Python",
    "Flask",
    "LangChain",
    "OpenAI",
    "RAG",
    "Firebase",
];

const labelsThird = [
    "Java",
    "Spring Boot",
    "Spring Security",
    "Microservices",
    "MySQL",
    "SQL Server",
    "Oracle",
    "MongoDB",
    "Git",
    "Postman",
    "Scrum",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Compétences</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faAngular} size="3x"/>
                    <h3>Développement Web Full-Stack</h3>
                    <p>Conception d'applications web complètes : interfaces Angular, API REST avec Node.js/Express, temps réel avec Socket.IO, tableaux de bord et reporting.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technologies :</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAndroid} size="3x"/>
                    <h3>Mobile & Intelligence Artificielle</h3>
                    <p>Développement d'applications mobiles avec Flutter, Développement des solutions basées sur des l'IA (LLM,RAG).</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technologies :</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Backend, Bases de données & Outils</h3>
                    <p>Développement backend avec Java/Spring (architecture microservices), modélisation et gestion de bases de données SQL et NoSQL, méthodologie Agile.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technologies :</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;