import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projets</h1>
        <div className="projects-grid">
            <div className="project">
                <h2>Yool - Application mobile</h2>
                <p>Version mobile de la plateforme Yool, développée avec Flutter. Les utilisateurs peuvent acheter des cours et les suivre, échanger via un forum de discussion, et suivre leurs ressources numériques d'apprentissage. Cette dernière partie fonctionne en mode hors-ligne, avec synchronisation des données au retour de la connexion. Intégration des API REST.</p>
            </div>
            <div className="project">
                <h2>Chatbot intelligent RAG - Yool</h2>
                <p>Chatbot basé sur un LLM (OpenAI) avec une architecture RAG (Retrieval-Augmented Generation) qui répond aux questions sur Yool grâce à une recherche sémantique. Backend avec Flask et LangChain, frontend avec Angular.</p>
            </div>
            <div className="project">
                <h2>Application mobile de gestion des séances pédagogiques</h2>
                <p>Application mobile développée avec Flutter (projet de fin d'études) pour gérer les séances pédagogiques au sein de Yool.</p>
            </div>
            <div className="project">
                <h2>Application de gestion des incidents</h2>
                <p>Un demandeur soumet une requête, le gestionnaire l'assigne à un technicien. Notifications, chat en temps réel et tableau de bord de reporting. Stack : Node.js (Express), Angular, MySQL, Socket.IO, PDF.js, Chart.js.</p>
            </div>
            <div className="project">
                <h2>Gestion des bornes électriques</h2>
                <p>Application desktop de gestion des bornes électriques : conception et modélisation UML, logique métier et intégration fonctionnelle. Stack : C++, Windows Forms, SQL Server.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;