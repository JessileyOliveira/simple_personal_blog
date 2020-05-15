import { createGlobalStyle } from 'styled-components';
import Robotottf from '../assets/fonts/Roboto/Roboto-Regular.ttf';

export default createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), local('Roboto'),
    url(${Robotottf}) format('trueType');
    font-weight: 300;
    font-style: normal;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Roboto";
  }

  html, body, #root{
    min-height: 100%;
  }

  body{
    background: #1e1e1e;
    -webkit-font-smoothing: antialiased !important;
  }

  /* scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #efefef;
  }
  ::-webkit-scrollbar-thumb {
    background: #272727;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
