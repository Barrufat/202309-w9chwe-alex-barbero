import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: freshMarker;
    src: url("./fonts/freshmarker.ttf") format("woff");
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
  text-align: center;
  padding: 10px;
  border:none;
  border-radius: 5px;
}

input[type="checkbox"]{
  width: 30px;
  height:30px;
  accent-color:black;
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

.button{
  &--create-new {
  font-size: 20px;
  font-family: freshMarker;
  background: #fff;
  &:hover{
    opacity: 0.5;
  }
  }
}
.add-title{
    padding: 20px;
    background: radial-gradient(#303030 10%, #6660 70%);
    margin-top: 40px;
    font-size: 20px;
    color: white;
    font-weight: 100;
}

@media (min-width: 800px) {
  .add-title{
    font-size: 30px;
  }
}

`;

export default GlobalStyle;
