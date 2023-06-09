import React, { Children } from "react";
import styled from "styled-components";

export function Button({text, onClick, type}) {
  return (
    <>
      <ButtonBox onClick={onClick} type={type} ><p>{text}</p></ButtonBox>
    </>
  );
}

const ButtonBox = styled.div`
  width: 100px;
  height: 38px;
  border-radius: 10px;
  background-color: #2478BC;
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
    background-color: #0C0636;
  }
  @media (max-width: 770px) {
    width: 50%;
    p{
      overflow: hidden;
    }
  }
`;
