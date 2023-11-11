import styled from "styled-components";

export const NormieCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  .warrior {
    margin-top: -30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    color: white;
    background-color: #838383a3;
    box-shadow: 10px 10px 10px #0005;
    padding: 25px;
    border-radius: 15px;

    &-title {
      z-index: 2;
      font-size: 40px;
      color: #b40000;
    }

    &__image {
      border-radius: 20px;
    }

    &__data-box {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

    &__tribe {
    }

    &__age {
    }
  }
`;
