import styled from "styled-components";

const AppStyled = styled.main<{ urlImg: string }>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 30px;
  background-image: url(${(props) => props.urlImg});
  background-size: cover;
`;

export default AppStyled;
