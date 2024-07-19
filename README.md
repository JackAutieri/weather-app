# 🌦️ Weather App

Welcome to the Weather App! This project demonstrates a full-stack application that provides real-time weather information based on user input. It showcases skills in React, styled-components, and API integration.

## 🚀 Features

- **Real-Time Weather Data**: Fetches current weather information for any city, with optional state and country parameters.
- **Dynamic Styling**: Changes the background based on weather conditions (sunny, rainy, cloudy).
- **Responsive Design**: User-friendly interface optimized for both desktop and mobile devices.

## 📦 Getting Started

To run this application locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Install project dependencies using Yarn:

```bash
yarn install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory of the project and add your OpenWeatherMap API key:

```
REACT_APP_OPEN_WEATHER_API_KEY=your_api_key_here
```

### 4. Start the Development Server

Run the following command to start the application:

```bash
yarn start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 🛠️ Project Structure

### `src/components/SearchForm.js`

**Description**: Component for user input (city, state, country) and search button.

**Key Features**:
- Handles user input for city, state, and country.
- Triggers a search action when the button is clicked.

**Example Code**:
```jsx
const handleSearch = () => {
  onSearch(city, state, country);
};
```

### `src/components/WeatherDisplay.js`

**Description**: Displays the weather information retrieved from the API.

**Key Features**:
- Shows weather description, temperature, humidity, and wind speed.
- Styled to enhance readability.

**Example Code**:
```jsx
const WeatherDisplay = ({ weather }) => (
  <WeatherInfo>
    <WeatherTitle>{weather.name}</WeatherTitle>
    <WeatherDetail>{weather.weather[0].description}</WeatherDetail>
    <WeatherDetail>Temperature: {weather.main.temp}°F</WeatherDetail>
    <WeatherDetail>Humidity: {weather.main.humidity}%</WeatherDetail>
    <WeatherDetail>Wind Speed: {weather.wind.speed} m/s</WeatherDetail>
  </WeatherInfo>
);
```

### `src/services/weatherService.js`

**Description**: Service for making API requests to OpenWeatherMap.

**Key Features**:
- Fetches weather data based on city, state, and country.
- Handles errors and logs them for debugging.

**Example Code**:
```js
export const getWeatherByCity = async (city, state = '', country = 'US') => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: `${city},${state},${country}`,
        appid: API_KEY,
        units: 'imperial',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
```

### `src/styles/globalStyles.js`

**Description**: Global styles with dynamic background based on weather conditions.

**Key Features**:
- Applies different background gradients for sunny, rainy, and cloudy weather.

**Example Code**:
```jsx
const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ weather }) =>
      weather === 'clear' ? 'linear-gradient(to bottom, #87ceeb, #fff)' :
      weather === 'rain' ? 'linear-gradient(to bottom, #00c6fb, #005bea)' :
      weather === 'clouds' ? 'linear-gradient(to bottom, #d3d3d3, #808080)' :
      'linear-gradient(to bottom, #fff, #f0f0f0)'};
  }
`;
```

### `src/App.js`

**Description**: Main application component that integrates search form and weather display.

**Key Features**:
- Manages state for user input and weather data.
- Applies global styles based on weather conditions.

**Example Code**:
```jsx
function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

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
```

## 🤝 Contributing

Feel free to submit issues, pull requests, or suggest improvements. All contributions are welcome!

