import { useContext, useState } from "react";
import styled from "styled-components";
import {
  IoIosMenu,
  IoMdContact,
  IoIosLogOut,
  IoMdPersonAdd,
} from "react-icons/io";
import logo from "../assets/images/logo.png";
import UserContext from "../context/userContext";
import { logOut } from "../service/signInService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function NavBar() {
  const [menu, setMenu] = useState(true);
  const { user, fullUser, userStorage, setUser, setFullUser, fullStorage } =
    useContext(UserContext);
  //sair da conta
  const navigate = useNavigate();
  async function Logout(event) {
    event.preventDefault();
    try {
      await logOut(userStorage.token);
      localStorage.removeItem("userData");
      localStorage.removeItem("fullUser");
      // setUser([])
      // setFullUser(null)
      navigate("/");
      window.location.reload(true);
      return;
    } catch (error) {
      console.log(error);
    }
  }
  async function newMedicalRecord() {
    return navigate("/register/medical-record");
  }
  console.log("o que tem no fullStorage", fullUser);
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
                <Options>
                  <NewRecord onClick={newMedicalRecord}>
                    <IoMdPersonAdd />
                    <p>NOVO PRONTUÁRIO</p>
                  </NewRecord>
                </Options>
              </LeftBar>
            </>
          )}
        </Menu>
        <UserInfo>
          <Contact>
            <IoMdContact
              onClick={() => console.log("Cliquei no contato", user)}
            />
          </Contact>

          {fullUser ? (
            <>
              <p>Logado:</p>
              <p>{fullStorage.name}</p>
            </>
          ) : (
            <>
              <p>Logado:</p>
              <p>{userStorage.email}</p>
            </>
          )}
          <Exit>
            <IoIosLogOut onClick={Logout} />
          </Exit>
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
  height: 100%;
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 770px) {
    padding: 5%;
  }
`;
const Click = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 35px;
  border-radius: 20%;
  background-color: rgba(
    ${(props) => (props.menu ? "0,0,0, 0.0" : "0, 0, 0, 0.1")}
  );
  :hover {
    color: white;
  }
`;
const UserInfo = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: black;
  font-size: 35px;
  p {
    font-size: 18px;
    text-align: start;
    cursor: default;
  }
  @media (max-width: 770px) {
    width: 100%;
    p {
      font-size: 12px;
      text-align: center;
    }
  }
`;
const Options = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const NewRecord = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  padding: 3%;
  p {
    font-size: 18px;
    margin-left: 7px;
  }
  :hover {
    background-color: #095169;
    color: white;
    border-radius: 3px;
    p{
      color: white;
    }
  }
  cursor: pointer;
`;
const Exit = styled.div`
  padding: 5%;
  cursor: pointer;
  :hover {
    color: white;
    /* #095169 */
  }
`;
const Contact = styled.div`
  padding: 5%;
`;
