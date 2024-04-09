import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faTint, faWind } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = 'f10acad834a5f90d33c1a40d20e88a86';

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('Failed to fetch weather data. Please try again later.');
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="form-control"
            placeholder="Enter city name"
          />
        </div>
        <button type="submit" className="btn btn-primary">Get Weather</button>
      </form>
      {weatherData && (
        <div className="mt-3">
          <h2>{weatherData.name}</h2>
          <p>
            <FontAwesomeIcon icon={faThermometerHalf} />
            {' '}
            Temperature: {weatherData.main.temp}°C
          </p>
          <p>
            <FontAwesomeIcon icon={faTint} />
            {' '}
            Humidity: {weatherData.main.humidity}%
          </p>
          <p>
            <FontAwesomeIcon icon={faWind} />
            {' '}
            Wind Speed: {weatherData.wind.speed} m/s
          </p>
        </div>
      )}
    </div>
  );
}

export default Weather;
