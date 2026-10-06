import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/rabhi-lobna-32a239243/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:lobnarabhi1@gmail.com"><MailIcon/></a>
      </div>
      <p>Portfolio de Lobna Rabhi · Casablanca, Maroc</p>
    </footer>
  );
}

export default Footer;