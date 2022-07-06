import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  text-decoration: none;
  list-style:none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
}

:root {
  --purple-500: #8284fa;
  --purple-700: #5e60ce;
  --blue-500: #4ea8de;
  --blue-700: #1e6f9f;

  /* Base */
  --gray-100: #f2f2f2;
  --gray-200: #d9d9d9;
  --gray-300: #808080;
  --gray-400: #333333;
  --gray-500: #262626;
  --gray-600: #1a1a1a;
  --gray-700: #0d0d0d;

  --red-500: #e25858;
}
  #root{
    height: 100vh;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body{
    background-color: var(--gray-600);
  }

  body, input, textarea, button{
    font-family: "Inter", sans-serif;
    line-height: 140%;
  }

  h1,h2,h3,h4,h5,h6{
    font-weight: 700;
  } 
`;
