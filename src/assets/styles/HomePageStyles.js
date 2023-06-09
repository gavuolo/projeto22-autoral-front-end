import styled from "styled-components";
export const ContainerMidBox = styled.div`
  width: 50%;
  height: auto;
  padding: 2%;
  background-color: white;
  -webkit-box-shadow: 0px 0px 28px -5px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 0px 0px 28px -5px rgba(0, 0, 0, 0.73);
  box-shadow: 0px 0px 28px -5px rgba(0, 0, 0, 0.73);
  border-radius: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 770px) {
    width: 90%;
  }
`;

export const Warning = styled.div`
  width: 50%;
  margin: 10px 0 10px 0;
  text-align: center;
  p {
    font-weight: 300;
    font-size: 13px;
  }
  &Link {
    font-weight: 800;
  }
`;

export const FormBox = styled.div`
  margin: 10px 0 10px 0;
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: start;
  p {
    width: auto;
    text-align: start;
    font-size: 1rem;
    font-weight: 500;
  }
  select {
    cursor: pointer;
    width: auto;
    height: 38px;
    border-radius: 10px;
    border: 2px solid;
    padding: 4px 17px 0;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    background-color: rgba(0, 0, 0, 0.05);
    :focus {
      border: 2px solid;
      background-color: rgba(0, 0, 0, 0);
      outline: none;
      cursor: pointer;
    }
  }
`;