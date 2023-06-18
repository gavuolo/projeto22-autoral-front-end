import styled from "styled-components";
export const FormDiv = styled.div`
  width: 74%;
  height: 100vh;
  margin-top: 140px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 5% 0 5%;
`;
export const Info = styled.div`
  width: 100%;
  height: auto;
  h2 {
    font-size: 20px;
  }
`;
export const ContentInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  //tirar o arrow do input number
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const FixedInput = styled.div`
  margin-top: 2%;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;
export const FillInput = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
