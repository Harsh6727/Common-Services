import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';
import WelcomeLogo from '../public/WelcomePage.png';
import Navbar from './Navbar';


const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/home');
  };

  return (
    <div className="welcome-page">
      <Navbar />
      <img src={WelcomeLogo.src} alt="Soarée Airlines" className="welcome-page__background" />
      <div className="welcome-page__overlay">
        <h1 className="welcome-page__title">OneStop</h1>
        <p className="welcome-page__subtitle">Your Gateway to a Connected Life</p>
        <button className="welcome-page__button" onClick = {handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
};

export default WelcomePage;
