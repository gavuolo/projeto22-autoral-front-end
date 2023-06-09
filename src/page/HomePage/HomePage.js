import styled from "styled-components";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import React, { useContext } from "react";
import { signIn } from "../../service/signInService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "../../context/userContext";
import { ContainerMidBox, MidBox, Warning } from "../../assets/styles/HomePageStyles";

export default function HomePage() {
  const [form, handleForm] = useForm({
    email: "",
    password: "",
  });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  async function Login(event) {
    event.preventDefault();
    try {
      const response = await signIn(form);
      setUser(response);
      console.log(response);
      navigate("/dashboard");
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
        <Button text="Login" onClick={Login} />
      </ContainerMidBox>
    </>
  );
}
