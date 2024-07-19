import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  console.log('API Key:', apiKey);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
