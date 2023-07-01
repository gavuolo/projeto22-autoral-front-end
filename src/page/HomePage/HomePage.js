import { Logo } from "../../components/Logo";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import React, { useContext } from "react";
import { signIn } from "../../service/signInService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "../../context/userContext";
import {
  Background,
  ContainerMidBox,
  Warning,
} from "../../assets/styles/HomePageStyles";
import { userData } from "../../service/userService";
import { findRegisterUserStaff } from "../../service/userStaffService";
import { findRegisterRecepcionist } from "../../service/userRecepcionistService";

export default function HomePage() {
  const [form, handleForm] = useForm({});
  const { setUser, setUserStorage, userStorage, setFullUser, setFullStorage } =
    useContext(UserContext);
  const navigate = useNavigate();
  async function changePage(userType, token) {
    try {
      if (userType === "Recepcionista") {
        const userRecepcionistRegister = await findRegisterRecepcionist(token);
        setFullUser(userRecepcionistRegister);
        setFullStorage(userRecepcionistRegister);
        navigate("/dashboard");
        return;
      }
      const userStaffRegistration = await findRegisterUserStaff(token);
      setFullStorage(userStaffRegistration);
      setFullUser(userStaffRegistration);
      navigate("/dashboard");
      return;
    } catch (error) {
      console.log(error);
      if (userType === "Recepcionista") {
        navigate("/register/receptionist");
        return;
      }
      navigate("/register/staff");
    }
  }
  async function Login(event) {
    event.preventDefault();
    try {
      const response = await signIn(form);
      setUserStorage(response);
      const user = await userData(response.token);
      setUser(user);
      changePage(response.userType, response.token);
      return;
    } catch (error) {
      return toast.error(error.response.data, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  return (
    <>
      <Background>
        <ContainerMidBox>
          <Logo />
          <Input
            placeholder="Email"
            type="Email"
            text="Email"
            name="email"
            value={form.email}
            onChange={handleForm}
            width="auto"
            required
          />
          <Input
            placeholder="Senha"
            type="password"
            text="Senha"
            name="password"
            value={form.password}
            onChange={handleForm}
            width="auto"
            required
          />
          <Warning>
            <p>
              Ainda não tem conta no HealthOn?{" "}
              <Link to="/sign-up">CADASTRAR</Link>
            </p>
          </Warning>
          <Button text="Entrar" onClick={Login} />
        </ContainerMidBox>
      </Background>
    </>
  );
}
