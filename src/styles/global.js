import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  html, body, #root{
    min-height: 100%;
  }

  body{
    background: #ccc9e7;
    -webkit-font-smoothing: antialiased !important;
  }
`;
