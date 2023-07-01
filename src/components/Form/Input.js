import React from "react";
import styled from "styled-components";

export function Input({
  placeholder,
  type,
  name,
  onChange,
  value,
  text,
  width,
  required,
  readOnly,
}) {
  return (
    <>
      <FormBox width={width}>
        <p>{text}</p>
        <InputBox
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          readOnly={readOnly}
        />
      </FormBox>
    </>
  );
}
const FormBox = styled.div`
  /* padding: 15px 0 0; */
  margin: 10px 20px 10px 0px;
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  text-align: start;
  p {
    width: auto;
    text-align: start;
    font-size: 1rem;
    font-weight: 500;
  }
  @media (max-width: 770px) {
    width: ${(props) => props.width};
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

  @media (max-width: 770px) {
    width: 100%;
  }
`;
