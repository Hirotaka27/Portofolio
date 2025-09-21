import React, { useEffect } from 'react';
import './App.css';
import { FaWhatsapp, FaDownload, FaUsers } from 'react-icons/fa';

const WHATSAPP_NUMBER: string = "+62 812-3456-789"; 
const CHAT_MESSAGE: string = "Halo saya tertarik dengan info eksklusif.";
const ADSENSE_ARTICLE_URL: string = "adsense-article.html"; 

const WA_CHAT_LINK: string = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(CHAT_MESSAGE)}`;

const WhatsAppPrelander: React.FC = () => {
    
    useEffect(() => {
        document.title = "Chat on WhatsApp";
    }, []);

    const handleContinueChat = (): void => {
        window.location.href = WA_CHAT_LINK;
    };
  

    const handleJoinGroup = (): void => {
        window.location.href = ADSENSE_ARTICLE_URL; 
    };

    return (
        <div className="wa-landing-page">
            
            <header className="wa-header">
                <div className="wa-header-inner">
                    <div className="wa-logo-container">
                        <FaWhatsapp className="wa-logo-icon" />
                        <span className="wa-logo-text">WhatsApp</span>
                    </div>
                    <nav className="wa-nav">
                        <a href="#">Features</a>
                        <a href="#">Privacy</a>
                        <a href="#">Help Center</a>
                        <a href="#">Blog</a>
                        <a href="#">For Business</a>
                        <a href="#">Apps</a>
                    </nav>
                    <button className="wa-download-btn">
                        <FaDownload /> Download
                    </button>
                </div>
            </header>

            <main className="wa-main-content">
                <p className="chat-prompt">
                    Chat on WhatsApp with {WHATSAPP_NUMBER}
                </p>
                
                <div className="button-group-wa"> 
                    
                    <button 
                        className="btn continue-chat-btn" 
                        onClick={handleContinueChat}
                    >
                        Continue to Chat
                    </button>

                    <button 
                        className="btn join-group-btn" 
                        onClick={handleJoinGroup}
                    >
                        <FaUsers /> Join Private Group Now
                    </button>

                </div>

                <div className="message-preview">
                    {CHAT_MESSAGE}
                </div>

                <div className="download-prompt">
                    Don't have WhatsApp yet?
                    <a href="#" className="download-link">Download</a>
                </div>
            </main>

            <footer className="wa-footer">
                <div className="wa-footer-inner">
                    
                    <div className="footer-col footer-logo">
                        <div className="wa-logo-container">
                            <FaWhatsapp className="wa-logo-icon" />
                            <span className="wa-logo-text">WhatsApp</span>
                        </div>
                    </div>

                    <div className="footer-col">
                        <p className="col-title">What we do</p>
                        <a href="#">Features</a>
                        <a href="#">Blog</a>
                    </div>
                    
                    <div className="footer-col">
                        <p className="col-title">Who we are</p>
                        <a href="#">About us</a>
                        <a href="#">Careers</a>
                    </div>
                    
                    <div className="footer-col">
                        <p className="col-title">Use WhatsApp</p>
                        <a href="#">Android</a>
                        <a href="#">iPhone</a>
                    </div>
                    
                    <div className="footer-col">
                        <p className="col-title">Need help?</p>
                        <a href="#">Contact Us</a>
                        <a href="#">Help Center</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default WhatsAppPrelander;