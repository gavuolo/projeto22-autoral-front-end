import styled from "styled-components";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { Link } from "react-router-dom";
import { InputSubmit } from "../../components/Form/InputSubmit";

export default function SignUpPage() {
  return (
    <>
      <MidBox>
        <Logo />
        <InputSubmit text="Tipo de usuário"/>
        <Input type="Email" text="Email" />
        <Input type="password" text="Senha" />
        <Input type="password" text="Confirmar senha" />
        <Warning>
          <p>
            Já tem uma conta no HealthOn?{' '}
            <Link to="/">LOGIN</Link>
          </p>
        </Warning>
        <Button text="Cadastrar" />
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
