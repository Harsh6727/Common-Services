"use client";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from '../components/AppContext';
import WelcomePage from '@/components/WelcomePage';
import HomePage from '@/components/HomePage';
import HospitalFinder from '@/components/healthcare/FindHospitals/hospitals';
import HomeLoanInterestRates from '@/components/finance/HomeLoan/HomeLoan';
import EducationLoanInterestRates from '@/components/finance/EducationLoan/EducationLoan';
import NearbyHospitals from '@/components/healthcare/NearbyHospitals/NearbyHospital';
import TaxSavings from '@/components/finance/TaxSavings/TaxSavings';
import DiagnosticCenters from '@/components/healthcare/DiagnosticCenters/diagnostic';


const Page: React.FC = () => {
  return (
    <div>
      
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/" element={<WelcomePage/>} />
            <Route path="/home/healthcare/Hospital-Finder" element={<HospitalFinder/>} />
            <Route path='/home/healthcare/Nearby-Hospitals' element={<NearbyHospitals/>} />
            <Route path="/home/healthcare/DiagnosticCenters" element={<DiagnosticCenters/>} />
            <Route path="/home/finance/HomeLoan" element={<HomeLoanInterestRates/>} />
            <Route path="/home/finance/EducationLoan" element={<EducationLoanInterestRates/>} />
            <Route path="/home/finance/TaxSavings" element={<TaxSavings/>} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
};

export default Page;
