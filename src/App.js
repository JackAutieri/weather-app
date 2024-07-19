import React, { useEffect, useState } from 'react';
import SearchForm from './components/SearchForm';
import WeatherDisplay from './components/WeatherDisplay';
import { getWeatherByCity } from './services/weatherService';
import GlobalStyle from './styles/globalStyles';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    document.body.className = weather ? weather.weather[0].main.toLowerCase() : '';
  }, [weather]);

  const handleSearch = async (city, state, country) => {
    try {
      const data = await getWeatherByCity(city, state, country);
      setWeather(data);
      setError('');
    } catch (error) {
      setError('City not found or an error occurred.');
      setWeather(null);
    }
  };

  return (
    <>
      <GlobalStyle weather={weather ? weather.weather[0].main.toLowerCase() : ''} />
      <div className="App">
        <h1>Weather App</h1>
        <SearchForm onSearch={handleSearch} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {weather && <WeatherDisplay weather={weather} />}
      </div>
    </>
  );
}

export default App;
