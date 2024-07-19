import React from 'react';
import styled from 'styled-components';

const WeatherInfo = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 2px solid #007bff;
  border-radius: 10px;
  background-color: #fff;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const WeatherTitle = styled.h2`
  margin: 0;
  font-size: 2em;
  color: #333;
`;

const WeatherDetail = styled.p`
  margin: 5px 0;
  font-size: 1.2em;
`;

const WeatherDisplay = ({ weather }) => (
  <WeatherInfo>
    <WeatherTitle>{weather.name}</WeatherTitle>
    <WeatherDetail>{weather.weather[0].description}</WeatherDetail>
    <WeatherDetail>Temperature: {weather.main.temp}°F</WeatherDetail>
    <WeatherDetail>Humidity: {weather.main.humidity}%</WeatherDetail>
    <WeatherDetail>Wind Speed: {weather.wind.speed} m/s</WeatherDetail>
  </WeatherInfo>
);

export default WeatherDisplay;
