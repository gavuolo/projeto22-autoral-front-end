import { useContext, useState } from "react";
import styled from "styled-components";
import { IoIosMenu, IoIosContact, IoIosLogOut } from "react-icons/io";
import logo from "../assets/images/logo.png";
import UserContext from "../context/userContext";
import { logOut } from "../service/signInService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function NavBar() {
  const [menu, setMenu] = useState(true);
  const { user, userInfo } = useContext(UserContext);
  //sair da conta
  const navigate = useNavigate();
  async function Logout(event) {
    event.preventDefault();
    try {
      await logOut(user.token);
      console.log("deslogou");
      toast.success("Até a próxima!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  async function newMedicalRecord() {
    return navigate("/register/medical-record");
  }
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
              <LeftBar menu={menu}>
                <h4 onClick={newMedicalRecord}>NOVO PRONTUÁRIO</h4>
              </LeftBar>
            </>
          )}
        </Menu>
        <UserInfo>
          <IoIosContact
            onClick={() => console.log("Cliquei no contato", user)}
          />
          <p>TESTE</p>
          <IoIosLogOut onClick={Logout} />
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
  font-size: 35px;
`;
