import React from 'react';
import '../components/Footer.css';

const Footer = () => {
    const contactEmail = "joshboepple@anchortech.org";
    const currentYear = new Date().getFullYear();

    return (
        <footer className="simple-footer-container">
            <p>{currentYear} AnchorTech Innovations LLC</p>

            <div className="footer-content">
                <a href={`mailto:${contactEmail}`} className="footer-link">
                    {contactEmail}
                </a>

            </div>
        </footer>
    );
};

export default Footer;
