import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherByCity = async (city, state = '', country = 'US') => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: `${city},${state},${country}`,
        appid: API_KEY,
        units: 'imperial', // or 'metric' for Celsius
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
