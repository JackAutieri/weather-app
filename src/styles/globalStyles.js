import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background: ${({ weather }) =>
      weather === 'clear' ? 'linear-gradient(to bottom, #87ceeb, #fff)' :
      weather === 'rain' ? 'linear-gradient(to bottom, #00c6fb, #005bea)' :
      weather === 'clouds' ? 'linear-gradient(to bottom, #d3d3d3, #808080)' :
      'linear-gradient(to bottom, #fff, #f0f0f0)'};
    color: #333;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .App {
    text-align: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
