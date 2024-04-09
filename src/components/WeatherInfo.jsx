import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faTint, faWind } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const WeatherInfo = ({ weatherData }) => (
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
);

WeatherInfo.propTypes = {
  weatherData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default WeatherInfo;
