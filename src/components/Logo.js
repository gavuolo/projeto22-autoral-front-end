import styled from "styled-components";
import logo from "../assets/images/logo.svg";
export function Logo() {
  return (
    <>
      <LogoBox>
        <Img src={logo} />
      </LogoBox>
    </>
  );
}

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width: 200px;
  height: 200px;
`;
