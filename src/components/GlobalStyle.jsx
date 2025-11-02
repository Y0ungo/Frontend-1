import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  /* NanumSquareRound 폰트 등록*/
  @font-face {
    font-family: 'NanumSquareRound';
    src: url('/fonts/NanumSquareRound.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  
    /* SOYO Maple TTF 폰트 등록 */
  @font-face {
    font-family: 'SOYO Maple TTF';
    src: url('/fonts/SOYOMapleTTF.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  /* 전체 초기화 + 기본 폰트 지정 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'NanumSquareRound', 'SOYO Maple TTF', sans-serif;
  }

  body {
    background-color: #fff;
    color: #000;
  }
`;

export default GlobalStyle;
