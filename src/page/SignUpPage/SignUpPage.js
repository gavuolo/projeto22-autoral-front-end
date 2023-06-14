import styled from "styled-components";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { Link, useNavigate } from "react-router-dom";
import { InputSubmit } from "../../components/Form/InputSubmit";
import useForm from "../../hooks/useForm";
import { signUp } from "../../service/signUpService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Background,
  ContainerMidBox,
  FormBox,
  Warning,
} from "../../assets/styles/HomePageStyles";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export default function SignUpPage() {
  const [form, handleForm] = useForm({
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function Register(event) {
    event.preventDefault();
    try {
      const response = await signUp(form);
      setLoading(!false);
      toast.success("Registrado com sucesso!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => navigate("/"), 1500);
      return console.log(response);
    } catch (error) {
      if (error.response.data.name === "ConflictError") {
        toast.error(error.response.data.message, {
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
      if (error.response.data.name === "DuplicatedEmailError") {
        toast.error(error.response.data.message, {
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
      if (error.response.data.name === "differentPasswordError") {
        toast.error(error.response.data.message, {
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
      return console.log(error.response.data);
    }
  }
  return (
    <Background>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ContainerMidBox>
        <Logo />
        <FormBox>
          <p>Tipo de Usuário</p>
          <select
            name="userType"
            value={form.userType}
            onChange={handleForm}
            required
          >
            <option value="Escolher" hidden="hidden">
              Escolher
            </option>
            <option value="Profissional de saúde">Profissional de saúde</option>
            <option value="Recepcionista">Recepcionista</option>
          </select>
        </FormBox>
        <Input
          type="Email"
          text="Email"
          value={form.email}
          name="email"
          onChange={handleForm}
          width='auto'
          required
        />
        <Input
          type="password"
          text="Senha"
          value={form.password}
          name="password"
          onChange={handleForm}
          width='auto'
          required
        />
        <Input
          type="password"
          text="Confirmar senha"
          value={form.confirmPassword}
          name="confirmPassword"
          onChange={handleForm}
          width='auto'
          required
        />
        <Warning>
          <p>
            Já tem uma conta no HealthOn? <Link to="/">LOGIN</Link>
          </p>
        </Warning>
        {loading ? (
          <Button text="Carregando" type="submit" disabled />
        ) : (
          <Button text="Cadastrar" type="submit" onClick={Register} />
        )}
      </ContainerMidBox>
      </Background>
  );
}
