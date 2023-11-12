import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: freshMarker;
    src: url("src/fonts/freshmarker.ttf") format("truetype");
  }

*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

body {
  margin: 0;
  background-color: #ffffff;
}

p{
  margin:0;
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

.add-title{
    padding: 20px;
    background: radial-gradient(#303030 10%, #6660 70%);
    margin-top: 40px;
    font-size: 30px;
    color: white;
    font-weight: 100;
}

`;

export default GlobalStyle;
