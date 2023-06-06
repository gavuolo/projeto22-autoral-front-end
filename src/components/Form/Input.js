import React from "react";
import styled from "styled-components";

export function Input({ placeholder, type, name, onChange, value }) {
  return (
    <>
      <InputBox
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      ></InputBox>
    </>
  );
}

const InputBox = styled.input`
  width: 50%;
  height: 12%;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 4px 20px 0;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;

  :focus {
    outline: none;
  }
`;
