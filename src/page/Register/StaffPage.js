import styled from "styled-components";
import { NavBar } from "../../components/NavBar";
import { Input } from "../../components/Form/Input";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import UserContext from "../../context/userContext";
import { useState } from "react";
import {
  specialityRegister,
  userStaffRegister,
} from "../../service/userStaffService";
import { Button } from "../../components/Form/Button";

export default function RegisterStaff() {
  const { user, token } = useContext(UserContext);
  const [form, handleForm] = useForm({});
  async function Register(event) {
    event.preventDefault();
    const name = { name: form.speciality };
    try {
      const speciality = await specialityRegister(name, user.token);
      const specialityId = speciality.id;
      const date = form.birthday;
      const part = date.split("-");
      let convertedDate = part[2] + "-" + part[1] + "-" + part[0];
      convertedDate = convertedDate.replace(/-/g, "/");
      console.log(convertedDate);
      const body = {
        name: form.name,
        socialName: form.socialName,
        cpf: form.cpf,
        phone: form.phone,
        gender: form.gender,
        birthday: convertedDate,
        profession: form.profession,
        council: form.council,
        councilRegistration: form.councilRegistration,
        councilState: form.councilState,
        specialityId: specialityId,
      };
      const response = await userStaffRegister(body, user.token);
      return console.log(response);
    } catch (error) {
      return console.log(error.response.data);
    }
  }

  return (
    <>
      <NavBar />
      <FormDiv>
        <Info>
          <h2>Termine seu cadastro.</h2>
        </Info>
        <FixedInput>
          <Input text="Email" value={user.email} width="70%" />
          <Input text="Tipo de usuário" value={user.userType} width="50%" />
        </FixedInput>
        <FillInput>
          <ContentInput>
            <Input
              text="Nome"
              type="text"
              name="name"
              value={form.name}
              onChange={handleForm}
              width="70%"
              required='true'
            />
            <Input
              text="Nome social"
              type="text"
              name="socialName"
              value={form.socialName}
              onChange={handleForm}
              width="50%"
              required='false'
            />
            <Input
              text="CPF"
              type="number"
              name="cpf"
              value={form.cpf}
              onChange={handleForm}
              width="40%"
              required='true'
            />
            <Input
              text="Telefone"
              type="number"
              name="phone"
              value={form.phone}
              onChange={handleForm}
              width="40%"
              required='true'
            />
            <Input
              text="Gênero"
              type="text"
              name="gender"
              value={form.gender}
              onChange={handleForm}
              width="40%"
              required='true'
            />
            <Input
              text="Data de nascimento"
              type="date"
              name="birthday"
              value={form.birthday}
              onChange={handleForm}
              width="40%"
              required='false'
            />
            <Input
              text="Profissão"
              type="text"
              name="profession"
              value={form.profession}
              onChange={handleForm}
              width="40%"
              required='true'
            />
             <Input
              text="Especilidade"
              type="text"
              name="speciality"
              value={form.speciality}
              onChange={handleForm}
              width="40%"
              required='true'
            />
            <Input
              text="Conselho"
              type="text"
              name="council"
              value={form.council}
              onChange={handleForm}
              width="40%"
              required='true'
            />
            <Input
              text="Número no conselho"
              type="number"
              name="councilRegistration"
              value={form.councilRegistration}
              onChange={handleForm}
              width="40%"
              required='true'
            />
            <Input
              text="Região do conselho"
              type="text"
              name="councilState"
              value={form.councilState}
              onChange={handleForm}
              width="40%"
              required='true'
            />
          </ContentInput>
        </FillInput>
        <Button onClick={Register} />
      </FormDiv>
    </>
  );
}
const FormDiv = styled.div`
  width: 74%;
  height: 100vh;
  margin-top: 140px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 5% 0 5%;
`;
const Info = styled.div`
  width: 100%;
  height: auto;
  h2 {
    font-size: 20px;
  }
`;
const ContentInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  //tirar o arrow do input number
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const FixedInput = styled.div`
  margin-top: 2%;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;
const FillInput = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
