import { useContext, useState } from "react";
import styled from "styled-components";
import { IoIosMenu, IoIosContact , IoIosLogOut } from "react-icons/io";
import logo from "../assets/images/logo.png";
import UserContext from "../context/userContext";

export function NavBar() {
  const [menu, setMenu] = useState(false);
  const { user, token } = useContext(UserContext);
  
  return (
    <>
      <TopBar>
        <Menu>
          {menu ? (
            <Click menu={menu}>
              <IoIosMenu onClick={() => setMenu(!menu)} />
            </Click>
          ) : (
            <>
              <Click menu={menu}>
                <IoIosMenu onClick={() => setMenu(!menu)} />
              </Click>
              <LeftBar menu={menu} />
            </>
          )}
        </Menu>
        <UserInfo>
        <IoIosContact onClick={ () => console.log("Cliquei no contato", user)}/>
        <IoIosLogOut onClick={ () => console.log("Cliquei em sair", user)}/>
        </UserInfo>
      </TopBar>
    </>
  );
}

const TopBar = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 70px;
  background-color: #4a90e2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftBar = styled.div`
  position: fixed;
  left: 0;
  top: 70px;
  width: 230px;
  height: 100vh;
  background-color: #6e6e78;
  ${(props) =>
    props.menu
      ? `animation: fadeOut 110ms linear 0s 1 normal forwards`
      : `animation: transition 110ms linear 0s 1 normal forwards`};
  @keyframes transition {
    0% {
      opacity: 0;
      transform: translateX(-250px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: translateX(0);
    }

    100% {
      opacity: 0;
      transform: translateX(-250px);
    }
  }
`;

const Menu = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: yellow;
`;

const Click = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 35px;
  border-radius: 20%;
  background-color: rgba(
    ${(props) => (props.menu ? "0,0,0, 0.0" : "83, 186, 131, 0.5")}
  );
  :hover {
    color: #095169;
  }
`;

const UserInfo = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  background-color: aqua;
  font-size: 35px;
`;
