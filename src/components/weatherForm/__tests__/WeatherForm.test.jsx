import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import WeatherForm from './WeatherForm';

describe('WeatherForm component', () => {
  test('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(<WeatherForm />);
    const input = getByPlaceholderText('Enter city name');
    const button = getByText('Get Weather');
    
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('calls handleSubmit with the input value when form is submitted', () => {
    const handleSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(<WeatherForm handleSubmit={handleSubmit} />);
    const input = getByPlaceholderText('Enter city name');
    const button = getByText('Get Weather');

    fireEvent.change(input, { target: { value: 'New York' } });
    fireEvent.click(button);

    expect(handleSubmit).toHaveBeenCalledWith(expect.anything());
    expect(handleSubmit).toHaveBeenCalledWith('New York');
  });
});
