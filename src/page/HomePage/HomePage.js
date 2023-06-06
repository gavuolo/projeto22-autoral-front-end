import styled from "styled-components";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Form/Input";
export default function HomePage() {
  return (
    <>
      <MidBox>
        <Logo />
        <Input placeholder="Email" type="Email"/>
        <Input placeholder="Senha" type="password"/>
      </MidBox>
    </>
  );
}

const MidBox = styled.div`
  width: 50%;
  height: 50%;
  background-color: white;
  border-radius: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
