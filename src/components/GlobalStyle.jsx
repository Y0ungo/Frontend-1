import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* SOYO Maple Regular */
  @font-face {
    font-family: 'SOYO Maple';
    src: url('/font/SOYO Maple Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  /* SOYO Maple Bold */
  @font-face {
    font-family: 'SOYO Maple';
    src: url('/font/SOYO Maple Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'NanumSquareRound', sans-serif;
  }
`;

export default GlobalStyle;
