import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css'; 
import healthimage from '../public/hospitalimg.png';
import image1 from '../public/health1.png';
import image2 from '../public/health2.png';
import image3 from '../public/health3.png';``
import image4 from '../public/health4.png';
import financeImage from '../public/financeimg.png';
import finance1 from '../public/finance1.png';
import finance2 from '../public/finance2.png';
import finance3 from '../public/finance3.png';
import finance4 from '../public/finance4.png';

const HomePage: React.FC = () => {

  const navigate = useNavigate();

  const handleHospitalFinder = () => {
    navigate('/home/healthcare/Hospital-Finder');
  };

  const handleNearbyHospitals = () => {
    navigate('/home/healthcare/Nearby-Hospitals');
  };

  const handleDiagnosticCenters = () => {
    navigate('/home/healthcare/DiagnosticCenters');
  };

  const handlePulsePal = () => {
    window.open('https://pulsepal-f1d640.zapier.app', '_blank');
  };

  const handleHomeLoan = () => {
    navigate('/home/finance/HomeLoan');
  };

  const handleEducationLoan = () => {
    navigate('/home/finance/EducationLoan');
  };

  const handletaxSavings = () => {
    navigate('/home/finance/TaxSavings');
  };


  const handleTaxMate = () => {
    window.open('https://finance-88ef3e.zapier.app', '_blank');
  };

  return (
    <div>
      <div className="hospitalcontainer">
        <img src={healthimage.src} alt="Healthcare Illustration" className="main-image" />
        <div className="circles-container">
          <div className="circle-item">
            <img src={image1.src} alt="Image 1" className="circle-image" />
            <button onClick={handleHospitalFinder}>Find Hospitals</button>
          </div>
          <div className="circle-item">
            <img src={image2.src} alt="Image 2" className="circle-image" />
            <button onClick={handleNearbyHospitals}>Nearby Hospitals</button>
          </div>
          <div className="circle-item">
            <img src={image3.src} alt="Image 3" className="circle-image" />
            <button onClick={handlePulsePal}>PulsePal</button>
          </div>
          <div className="circle-item">
            <img src={image4.src} alt="Image 4" className="circle-image" />
            <button onClick={handleDiagnosticCenters}>Diagnostic Centres</button>
          </div>
        </div>
      </div>
      

      <div className="financecontainer">
        <img src={financeImage.src} alt="Finance Illustration" className="main-image" />
        <div className="circles-container">
          <div className="circle-item">
            <img src={finance1.src} alt="Finance Image 1" className="circle-image" />
            <button onClick={handleHomeLoan}>Home Loans</button>
          </div>
          <div className="circle-item">
            <img src={finance2.src} alt="Finance Image 2" className="circle-image" />
            <button onClick={handleEducationLoan}>Education Loans</button>
          </div>
          <div className="circle-item">
            <img src={finance3.src} alt="Finance Image 3" className="circle-image" />
            <button onClick={handleTaxMate}>TaxMate</button>
          </div>
          <div className="circle-item">
            <img src={finance4.src} alt="Finance Image 4" className="circle-image" />
            <button onClick={handletaxSavings}>Tax Savings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
