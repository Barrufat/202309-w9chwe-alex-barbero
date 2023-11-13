import styled from "styled-components";

export const AppStyled = styled.main`
  z-index: 1;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 30px;
`;

export const BackgroundStyled = styled.div<{ url: string }>`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 0;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;
