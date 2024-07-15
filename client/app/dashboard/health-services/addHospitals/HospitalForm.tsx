'use client';

import React, { useState, useEffect } from 'react';
import styles from './HospitalForm.module.css';

const HospitalForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/healthcare/states');
        const data = await response.json();
        setStates(data);
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    if (state) {
      const fetchCities = async () => {
        try {
          const response = await fetch(`http://localhost:4000/api/healthcare/cities?state=${state}`);
          const data = await response.json();
          setCities(data);
        } catch (error) {
          console.error('Error fetching cities:', error);
        }
      };

      fetchCities();
    }
  }, [state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hospitalData = { firstName, address, state, city };

    if (!firstName || !address || !state || !city) {
      setErrorMessage('All fields are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/healthcare/add-hospital', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hospitalData),
      });

      if (response.ok) {
        setSuccessMessage('Hospital added successfully');
        setFirstName('');
        setAddress('');
        setState('');
        setCity('');

        setTimeout(() => {
          setSuccessMessage('');
        }, 3000); 
      } else {
        setErrorMessage('Failed to add hospital');
      }
    } catch (error) {
      setErrorMessage('Error: ' + error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/signout', {
        method: 'POST',
      });
      window.location.href = '/login';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Add Hospital</h2>
        <div className={styles.formGroup}>
          <label> Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>State:</label>
          <select value={state} onChange={(e) => setState(e.target.value)} required>
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>City:</label>
          <select value={city} onChange={(e) => setCity(e.target.value)} required>
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className={styles.submitButton}>Add Hospital</button>
        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default HospitalForm;
