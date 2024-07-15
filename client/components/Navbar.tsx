import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {

  const handleLoginClick = () => {
    window.location.href = 'http://localhost:3000/dashboard';
  };

  return (
    <nav className="head">
      <div className="headcontainer">
        <div className="headlogo">OneStop</div>
        <ul className="headmenu">
          <button className="headitem" onClick={handleLoginClick}> Login </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
