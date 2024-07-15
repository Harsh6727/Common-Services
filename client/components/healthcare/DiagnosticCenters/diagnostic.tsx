import React, { useState, useEffect } from 'react';
import '../FindHospitals/hospitals.css';
import diagnosticImg from './diagnostic.jpeg';
import Header from '../Header'

const DiagnosticCenters: React.FC = () => {
    const [states, setStates] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);
    const [selectedState, setSelectedState] = useState<string>('');
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [hospitals, setHospitals] = useState<{ name: string, address: string, contact: string }[]>([]);
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true);

    useEffect(() => {
        fetch('http://localhost:4000/api/diagnostic/states')
            .then(response => response.json())
            .then(data => setStates(data))
            .catch(error => console.error('Error fetching states:', error));
    }, []);

    useEffect(() => {
        if (selectedState) {
            fetch(`http://localhost:4000/api/diagnostic/cities?state=${selectedState}`) 
                .then(response => response.json())
                .then(data => setCities(data))
                .catch(error => console.error('Error fetching cities:', error));
        } else {
            setCities([]);
        }
    }, [selectedState]);

    const fetchHospitals = (state: string, city: string, page: number) => {
        fetch(`http://localhost:4000/api/diagnostic/diagnostic-Centers?state=${state}&city=${city}&page=${page}`) 
            .then(response => response.json())
            .then(data => {
                setHospitals(data);
                setHasMore(data.length === 7); 
            })
            .catch(error => console.error('Error fetching hospitals:', error));
    };

    const handleSearch = () => {
        setPage(1);
        fetchHospitals(selectedState, selectedCity, 1);
    };

    const handleNextPage = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchHospitals(selectedState, selectedCity, nextPage);
    };

    const handlePreviousPage = () => {
        const previousPage = page - 1;
        setPage(previousPage);
        fetchHospitals(selectedState, selectedCity, previousPage);
    };

    return (
        <div className="hospital-container">
            <Header />
            <div className="main-content">
                <div className="left-section">
                    <div className="main-heading-content">
                        <h1>Find Diagnostic Centers</h1>
                        <p>Enter your state and city to discover a list of Diagnostic Centers located in your area.</p>
                    </div>
                    <div className="input-container">
                        <div className="input-box">
                            <div className="icon-state"></div>
                            <label htmlFor="state">State</label>
                            <select 
                                id="state" 
                                value={selectedState} 
                                onChange={(e) => setSelectedState(e.target.value)}
                                style={{ background:'#fafafa', fontSize: '12px', opacity: 0.6, border: '1px solid #ccc', borderRadius: '5px', padding: '5px', width: '87%' }}>
                                <option value="">Select Your State</option>
                                {states.map(state => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </select>
                        </div>
                        <div className="input-box">
                            <div className="icon-city"></div>
                            <label htmlFor="city">City</label>
                            <select 
                                id="city" 
                                value={selectedCity} 
                                onChange={(e) => setSelectedCity(e.target.value)}
                                style={{ background:'#fafafa', fontSize: '12px', opacity: 0.6, border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}
                                disabled={!selectedState}>
                                <option value="">Select Your City</option>
                                {cities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                        <div className="input-box">
                            <div className="icon-hospital-list"></div>
                            <label>Diagnostic Centers</label>
                            <p style={{ fontSize: '13px', opacity: 0.6 }}>List of Diagnostic Centers in Your City</p>
                            <button className="view-details-link" onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <img src={diagnosticImg.src} alt="Hospital" />
                </div>
            </div>
            {hospitals.length > 0 && (
                <div className="hospital-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Contact</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {hospitals.map((hospital, index) => (
                                <tr key={index}>
                                    <td>{hospital.name}</td>
                                    <td>{hospital.address}</td>
                                    <td>{hospital.contact}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination">
                        {page > 1 && <button onClick={handlePreviousPage}>Previous</button>}
                        {hasMore && <button onClick={handleNextPage}>Next</button>}
                    </div>
                </div>
            )}
        </div>
    );
}

export default DiagnosticCenters;
