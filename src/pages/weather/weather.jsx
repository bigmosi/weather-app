/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faTint, faWind } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_API_KEY;

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      if (response.data.cod === '404') {
        setError('City not found. Please enter a valid city name.');
        setWeatherData(null);
      } else {
        setWeatherData(response.data);
        setError(null);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Failed to fetch weather data. Please try again later.');
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
      {error && (
      <div className="alert alert-danger" role="alert" style={{ marginTop: '5px' }}>
        Please Enter the correct name of the city!
      </div>
      )}
      {weatherData && (
        <div className="mt-3 weather-info">
          <h2>{weatherData.name}</h2>
          <p className="weather-info-item">
            <FontAwesomeIcon icon={faThermometerHalf} />
            {' '}
            Temperature:
            {weatherData.main.temp}
            °C
          </p>
          <p className="weather-info-item">
            <FontAwesomeIcon icon={faTint} />
            {' '}
            Humidity:
            {weatherData.main.humidity}
            %
          </p>
          <p className="weather-info-item">
            <FontAwesomeIcon icon={faWind} />
            {' '}
            Wind Speed:
            {weatherData.wind.speed}
            m/s
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
