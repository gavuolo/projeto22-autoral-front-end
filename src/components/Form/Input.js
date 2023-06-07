import React from "react";
import styled from "styled-components";

export function Input({ placeholder, type, name, onChange, value, text }) {
  return (
    <>
      <FormBox>
        <p>{text}</p>
        <InputBox type={type} name={name} value={value} onChange={onChange} />
      </FormBox>
    </>
  );
}
const FormBox = styled.div`
  /* padding: 15px 0 0; */
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
`;
const InputBox = styled.input`
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
  }
`;
