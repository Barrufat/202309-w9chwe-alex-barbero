import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
::before,
::after {
  box-sizing: border-box;
}

  @font-face {
    font-family: freshMarker;
    src: 
    local("freshMarker"),
    url("./src/fonts/freshmarker.ttf") format("woff");
  }

html {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

body {
  margin: 0;
  background-color: #ffffff;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

button,
input {
  font-family: inherit;
}

h1,
h2 {
  margin: 0;
  color: #ffffff;
  font-family: freshMarker;
}

button {
  cursor: pointer;
}

`;

export default GlobalStyle;
