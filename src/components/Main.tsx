import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import '../assets/styles/Main.scss';
import photo from '../assets/images/photo.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={photo} alt="Lobna Rabhi" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/rabhi-lobna-32a239243/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:lobnarabhi1@gmail.com"><MailIcon/></a>
          </div>
          <h1>Lobna Rabhi</h1>
          <p>Ingénieure logiciel Full-Stack</p>
          <p>Web & mobile (Angular, Java, Node.js, Flutter) · API REST · IA (LLM, RAG)</p>

          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/rabhi-lobna-32a239243/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:lobnarabhi1@gmail.com"><MailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;