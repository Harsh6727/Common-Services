import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import Header from '../Header'


// Extend Leaflet namespace
declare module 'leaflet' {
  namespace Routing {
    function control(options?: any): any;
  }
}

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const NearbyHospitals = () => {
  const [cityName, setCityName] = useState('');
  const [stateName, setStateName] = useState('');
  const [position, setPosition] = useState<[number, number]>([28.6139, 77.2090]); // Default position of Delhi
  const [hospitals, setHospitals] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const hospitalsPerPage = 5;
  const [isLocationFetched, setIsLocationFetched] = useState(false);
  const mapRef = useRef<any>(null);
  const routingControlRef = useRef<any>(null); 

  const addRoutingControl = () => {
    if (mapRef.current) {
      routingControlRef.current = L.Routing.control({
        waypoints: [], 
        routeWhileDragging: true,
      }).addTo(mapRef.current);
    }
  };
  

  useEffect(() => {
    if (isLocationFetched) {
      addRoutingControl();
    }
  }, [isLocationFetched]);


  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
          searchNearbyHospitals(position.coords.latitude, position.coords.longitude);
          setIsLocationFetched(true);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            alert('User denied Geolocation. Please enable location access in your browser settings.');
          } else {
            alert('Error fetching location: ' + error.message);
          }
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const searchNearbyHospitals = (lat: number, lng: number) => {
    const apiUrl = 'https://lz4.overpass-api.de/api/interpreter';
    const query = `[out:json];node(around:5000,${lat},${lng})[amenity=hospital];out;`;

    axios
      .get(apiUrl, { params: { data: query } })
      .then((response) => {
        setHospitals(response.data.elements);
        adjustMapView(response.data.elements);
      })
      .catch((error) => {
        console.error('Error fetching nearby hospitals:', error);
      });
  };

  const searchHospitals = (e: React.FormEvent) => {
    e.preventDefault();
    const query = `${cityName}, ${stateName}, India`;

    axios
      .get('https://nominatim.openstreetmap.org/search', {
        params: {
          q: query,
          format: 'json',
          limit: 1,
          countrycodes: 'IN',
        },
      })
      .then((response) => {
        if (response.data.length > 0) {
          const location = response.data[0];
          const cityLocation = { lat: parseFloat(location.lat), lon: parseFloat(location.lon) };
          setPosition([cityLocation.lat, cityLocation.lon]);
          searchNearbyHospitals(cityLocation.lat, cityLocation.lon);
          setIsLocationFetched(true);
        } else {
          alert('Location not found.');
        }
      })
      .catch((error) => {
        console.error('Error fetching location:', error);
      });
  };

  const adjustMapView = (locations: any[]) => {
    if (mapRef.current) {
      const bounds = L.latLngBounds(locations.map(loc => [loc.lat, loc.lon]));
      mapRef.current.fitBounds(bounds);
    }
  };

  const getDirections = (hospitalLat: number, hospitalLon: number) => {
    if (mapRef.current) {
      mapRef.current.eachLayer(layer => {
        if (!(layer instanceof L.TileLayer)) {
          mapRef.current.removeLayer(layer);
        }
      });
  
      const userLocationMarker = L.marker(position).addTo(mapRef.current);
  
      if (routingControlRef.current) {
        mapRef.current.removeControl(routingControlRef.current);
      }
  
      routingControlRef.current = L.Routing.control({
        waypoints: [
          L.latLng(position[0], position[1]),
          L.latLng(hospitalLat, hospitalLon)
        ],
        routeWhileDragging: true,
      }).addTo(mapRef.current);
  
      const hospitalMarker = L.marker([hospitalLat, hospitalLon]).addTo(mapRef.current);
      hospitalMarker.bindPopup('Hospital');
  
      const bounds = L.latLngBounds([position, [hospitalLat, hospitalLon]]);
      mapRef.current.fitBounds(bounds);
    }
  };
  
  const indexOfLastHospital = currentPage * hospitalsPerPage;
  const indexOfFirstHospital = indexOfLastHospital - hospitalsPerPage;
  const currentHospitals = hospitals.slice(indexOfFirstHospital, indexOfLastHospital);

  const nextPage = () => {
    if (currentPage < Math.ceil(hospitals.length / hospitalsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.searchContainer}>
        <button onClick={getLocation} style={styles.button}>Get My Location</button>
        <div style={styles.orText}>OR</div>
        <form onSubmit={searchHospitals} style={styles.searchForm}>
          <input
            type="text"
            placeholder="State"
            value={stateName}
            onChange={(e) => setStateName(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="City"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Search</button>
        </form>
      </div>
      <div style={styles.contentContainer}>
        <div style={styles.tableContainer}>
          <table style={styles.hospitalTable}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Name</th>
                <th style={styles.tableHeader}>Get Directions</th>
              </tr>
            </thead>
            <tbody>
              {currentHospitals.length > 0 ? (
                currentHospitals.map((hospital, idx) => (
                  <tr key={idx}>
                    <td style={styles.tableCell}>{hospital.tags.name || 'Hospital'}</td>
                    <td style={styles.tableCell}>
                      <button onClick={() => getDirections(hospital.lat, hospital.lon)} style={styles.button}>Get Directions</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} style={styles.noData}>No hospitals available</td>
                </tr>
              )}
            </tbody>
          </table>
          {isLocationFetched && (
            <div style={styles.paginationButtons}>
              {currentPage > 1 && (
                <button onClick={prevPage} style={styles.button}>Prev</button>
              )}
              {currentPage < Math.ceil(hospitals.length / hospitalsPerPage) && (
                <button onClick={nextPage} style={styles.button}>Next</button>
              )}
            </div>
          )}
        </div>
        <div style={styles.mapContainer}>
          <MapContainer center={position} zoom={12} style={styles.map} ref={mapRef}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {position && (
              <Marker position={position}>
                <Popup>Your Location</Popup>
              </Marker>
            )}
            {hospitals.map((hospital, idx) => (
              <Marker key={idx} position={[hospital.lat, hospital.lon]}>
                <Popup>{hospital.tags.name || 'Hospital'}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

interface Styles {
  container: React.CSSProperties;
  searchContainer: React.CSSProperties;
  button: React.CSSProperties;
  orText: React.CSSProperties;
  searchForm: React.CSSProperties;
  input: React.CSSProperties;
  contentContainer: React.CSSProperties;
  tableContainer: React.CSSProperties;
  hospitalTable: React.CSSProperties;
  tableHeader: React.CSSProperties;
  tableCell: React.CSSProperties;
  noData: React.CSSProperties;
  paginationButtons: React.CSSProperties;
  mapContainer: React.CSSProperties;
  map: React.CSSProperties;
}

const styles: Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '75px',
    marginTop:'3rem',
  },
  searchContainer: {
    display: 'flex',
    marginBottom: '20px',
    alignItems: 'center',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  orText: {
    margin: '0 20px',
    fontSize: '18px',
  },
  searchForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  contentContainer: {
    display: 'flex',
    width: '100%',
  },
  tableContainer: {
    flex: 1,
    paddingRight: '20px',
  },
  hospitalTable: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  tableHeader: {
    padding: '10px',
    border: '1px solid black',
    backgroundColor: '#f2f2f2',
  },
  tableCell: {
    padding: '10px',
    border: '1px solid black',
  },
  noData: {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid black',
  },
  paginationButtons: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  mapContainer: {
    flex: 1,
    paddingLeft: '20px',
  },
  map: {
    width: '100%',
    height: '370px',
    margin: '20px',
  },
};

export default NearbyHospitals;
