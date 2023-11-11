import styled from "styled-components";

const NavigationStyled = styled.nav`
  position: fixed;
  z-index: 2;
  top: 0;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  width: 100%;
  height: 150px;
  background: linear-gradient(180deg, #666 20%, #666666f2 30%, #fff0 100%);

  .navigation {
    &__title-box {
      width: 100%;
      height: 80px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__main-title {
      margin-top: 30px;
      width: 255px;
      height: 80px;
    }

    &__box {
      z-index: 3;
      display: flex;
      gap: 20px;
    }
  }

  @media (min-width: 800px) {
    justify-content: flex-end;

    .navigation {
      &__main-title {
        margin-top: 30px;
        width: 455px;
        height: 100px;
      }

      &__box {
        padding-right: 30px;
      }
    }
  }
`;

export default NavigationStyled;
