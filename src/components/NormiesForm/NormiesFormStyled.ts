import styled from "styled-components";

const NormiesFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  color: white;
  margin-bottom: 30px;
  background-color: #b55f5fd6;
  box-shadow: 10px 10px 10px #0005;
  padding: 25px;
  border-radius: 15px;

  .form {
    &__label {
      font-size: 30px;
      font-family: freshMarker;
    }

    &__description {
      height: 250px;
      padding: 15px;
      border: none;
      border-radius: 5px;
    }
  }
`;
export default NormiesFormStyled;
