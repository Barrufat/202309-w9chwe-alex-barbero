import styled from "styled-components";

const NavigationStyled = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  height: 200px;
  background: linear-gradient(180deg, #666 20%, #666666f2 30%, #fff0 100%);

  .navigation {
    &__box {
      display: flex;
      gap: 20px;
    }
  }
`;

export default NavigationStyled;
