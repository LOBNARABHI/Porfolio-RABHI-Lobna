import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Parcours</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="09/2025 - aujourd'hui"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Ingénieure logiciel Full-Stack</h3>
            <h4 className="vertical-timeline-element-subtitle">Yool Education · Casablanca</h4>
            <p>
              Développement et maintenance des applications web et mobiles (Flutter), intégration d'API REST et d'un chatbot, fonctionnalités offline avec synchronisation des données, méthodologie Agile.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="02/2025 - 07/2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Développeuse Mobile & IA (Stage PFE)</h3>
            <h4 className="vertical-timeline-element-subtitle">Yool Education · Casablanca</h4>
            <p>
              Application mobile Flutter de gestion des séances pédagogiques. Chatbot intelligent (LLM OpenAI + RAG) avec backend Flask et LangChain, frontend Angular.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="07/2024 - 09/2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Développeuse web Full-Stack (Stage)</h3>
            <h4 className="vertical-timeline-element-subtitle">Cactus Informatique · Casablanca</h4>
            <p>
              Application de gestion des incidents : Node.js/Express, Angular, MySQL, Socket.IO, PDF.js, Chart.js. API REST testée avec Postman.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="07/2023 - 08/2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Développeuse (Stage)</h3>
            <h4 className="vertical-timeline-element-subtitle">BESITEAM · Mohammedia</h4>
            <p>
              Application desktop de gestion des bornes électriques : modélisation UML, C++, Windows Forms, SQL Server.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Cycle d'ingénieur - Génie Logiciel et Systèmes Informatiques Distribués</h3>
            <h4 className="vertical-timeline-element-subtitle">ENSET · Mohammedia</h4>
            <p>
              Précédé d'un DEUST Mathématiques, Informatique et Physique à la FST de Mohammedia (2020 - 2022).
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;