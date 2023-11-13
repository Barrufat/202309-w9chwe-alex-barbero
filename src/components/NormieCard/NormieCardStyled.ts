import styled from "styled-components";

export const NormieCardStyled = styled.article`
  @font-face {
    font-family: freshMarker;
    src: url("./assets/fonts/freshmarker.ttf") format("woff");
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  .warrior {
    margin-top: -30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: relative;
    width: 250px;
    color: white;
    background-color: #272727d6;
    box-shadow: 10px 10px 10px #0005;
    padding: 25px;
    border-radius: 15px;

    &-title {
      z-index: 2;
      font-family: freshMarker;
      font-weight: 100;
      font-size: 40px;
      color: #b40000;
    }

    &__image-box {
      display: flex;
    }

    &__control-box {
      z-index: 2;
      height: 200px;
      display: flex;
      flex-direction: column;
      position: absolute;
      gap: 10px;
      margin-left: -10px;
      justify-content: space-evenly;
    }

    &__image {
      border-radius: 10px;
      width: 200px;
      height: 200px;
    }

    &__data-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 5px;
    }

    &__modifier--friend {
      position: absolute;
      right: 0;
      z-index: 1;
    }

    &__modifier--enemy {
      position: absolute;
      left: 0;
      z-index: 1;
    }

    &__data {
      font-family: freshMarker;
      font-weight: 100;
      font-size: 20px;
    }
  }
`;
