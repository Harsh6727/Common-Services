import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../finance/Header.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">Home</Link>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" aria-haspopup="true" aria-expanded="false">
              Healthcare
            </a>
            
            <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
              <Link className="dropdown-item" to="/home/healthcare/Hospital-Finder">Find Hospitals</Link>
              <Link className="dropdown-item" to="/home/healthcare/Nearby-Hospitals">Nearby Hospitals</Link>
              <Link className="dropdown-item" to="https://pulsepal-f1d640.zapier.app">PulsePal</Link>
              <Link className="dropdown-item" to="/home/healthcare/DiagnosticCenters">Diagnostic Centers</Link>

            </div>
          </li>

          {/* Dropdown 2 */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" aria-haspopup="true" aria-expanded="false">
              Finance
            </a>
            
            <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
              <Link className="dropdown-item" to="/home/finance/HomeLoan">Home Loans</Link>
              <Link className="dropdown-item" to="/home/finance/EducationLoan">Education Loans</Link>
              <Link className="dropdown-item" to="https://finance-88ef3e.zapier.app">TaxMate</Link>
              <Link className="dropdown-item" to="/home/finance/TaxSavings">Tax Savings</Link>

            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
