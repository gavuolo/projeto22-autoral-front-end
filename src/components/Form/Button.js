import React, { Children } from "react";
import styled from "styled-components";

export function Button({text}) {
  return (
    <>
      <ButtonBox><p>{text}</p></ButtonBox>
    </>
  );
}

const ButtonBox = styled.div`
  width: 20%;
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
`;
