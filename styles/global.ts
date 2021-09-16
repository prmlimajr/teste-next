import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F8F8F8;
    --text-primary: #3A362D;
    --text-secondary: #FFFFFF;
    --color-card: #FFFFFF;
    --button-primary: #26E271;
    --button-secondary: #3F71F0;
    --text-light: #C4C4C4;
    --alert: #E22626;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    @media(max-width:1080px) {
      font-size: 93.75%;
    }

    @media(max-width:720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    color: var(--text-primary);

    @media(max-width:1080px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @media(max-width:720px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--text-primary);
  }
`;
