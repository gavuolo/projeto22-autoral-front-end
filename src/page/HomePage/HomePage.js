import styled from "styled-components";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import React from "react";

export default function HomePage() {
  const [form, handleForm] = useForm({
    email: "",
    password: "",
  });

  function login(event) {
    event.preventDefault();
    console.log(form);
  }


  return (
    <>
      <MidBox>
        <Logo />
        <Input
          placeholder="Email"
          type="Email"
          text="Email"
          name="email"
          value={form.email}
          onChange={handleForm}
          required
        />
        <Input
          placeholder="Senha"
          type="password"
          text="Senha"
          name="password"
          value={form.password}
          onChange={handleForm}
          required
        />
        <Warning>
          <p>
            Ainda não tem conta no HealthOn?{" "}
            <Link to="/sign-up">CADASTRAR</Link>
          </p>
        </Warning>
        <Button text="Login" onClick={login} />
      </MidBox>
    </>
  );
}

const MidBox = styled.div`
  width: 40%;
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
`;
const Warning = styled.div`
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
