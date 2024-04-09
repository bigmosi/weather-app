import React, { useState } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-svg-core/styles.css';
import WeatherForm from '../../components/weatherForm/__tests__/WeatherForm';
import ErrorMessage from '../../components/ErrorMessage';
import WeatherInfo from '../../components/WeatherInfo';

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
      <WeatherForm city={city} setCity={setCity} handleSubmit={handleSubmit} />
      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </div>
  );
};

export default Weather;
