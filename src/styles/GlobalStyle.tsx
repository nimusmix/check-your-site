import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    transition: background-color 0.15s ease-in;
  }

  ::-webkit-scrollbar {
    width: 0.25rem;
    height: 0.25rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #FF715D;
    border-radius: 0.25rem;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  
  html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
    Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;

  background-color: ${({ theme: { bgColor } }) => bgColor};
  color: ${({ theme: { textColor } }) => textColor};
 }

 input {
  border: none;
  outline: none;
  background-color: transparent;
  font-family: transparent;
  
  :-webkit-autofill {
    -webkit-text-fill-color: ${({ theme: { textColor } }) => textColor};
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
 }

`;

export default GlobalStyle;
