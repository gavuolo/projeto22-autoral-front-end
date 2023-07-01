import React, { Children } from "react";
import styled from "styled-components";

export function Button({text, onClick, type, disabled}) {
  return (
    <>
      <ButtonBox onClick={onClick} type={type} disabled={disabled} ><p>{text}</p></ButtonBox>
    </>
  );
}

const ButtonBox = styled.div`
  width: 100px;
  height: 38px;
  border-radius: 10px;
  background-color: #4A90E2;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    color: white;
    font-size: 15px;
    font-weight: 600;
  }
  :hover{
    background-color: #A6CAED;
  } 
  @media (max-width: 770px) {
    width: 100px;
  }
`;
