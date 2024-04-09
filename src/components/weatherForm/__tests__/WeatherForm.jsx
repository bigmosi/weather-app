import React from 'react';
import PropTypes from 'prop-types';

const WeatherForm = ({ city, setCity, handleSubmit }) => (
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
);

WeatherForm.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default WeatherForm;
