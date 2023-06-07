import React from "react";
import styled from "styled-components";

export function InputSubmit({
  placeholder,
  type,
  name,
  onChange,
  value,
  text,
}) {
  return (
    <>
      <FormBox>
        <p>{text}</p>
        <select name="Selecionar">
          <option selected="selected" hidden="hidden">
            Escolher
          </option>
          <option value="Profissional de saúde">Profissional de saúde</option>
          <option value="Recepcionista">Recepcionista</option>
        </select>
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
