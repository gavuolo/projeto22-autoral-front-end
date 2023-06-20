import { useContext } from "react";
import { ContentInput, FillInput, FixedInput, FormDiv, Info } from "../../assets/styles/RegisterPageStyle";
import { Input } from "../../components/Form/Input";
import { NavBar } from "../../components/NavBar";
import UserContext from "../../context/userContext";
import useForm from "../../hooks/useForm";
import { Button } from "../../components/Form/Button";

export function NewMedicalRecord() {
  const { user } = useContext(UserContext);
  const [form, handleForm] = useForm({});
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
              required="true"
            />
            <Input
              text="Nome social"
              type="text"
              name="socialName"
              value={form.socialName}
              onChange={handleForm}
              width="50%"
              required="false"
            />
            <Input
              text="CPF"
              type="number"
              name="cpf"
              value={form.cpf}
              onChange={handleForm}
              width="40%"
              required="true"
            />
            <Input
              text="Telefone"
              type="number"
              name="phone"
              value={form.phone}
              onChange={handleForm}
              width="40%"
              required="true"
            />
            <Input
              text="Gênero"
              type="text"
              name="gender"
              value={form.gender}
              onChange={handleForm}
              width="40%"
              required="true"
            />
            <Input
              text="Data de nascimento"
              type="date"
              name="birthday"
              value={form.birthday}
              onChange={handleForm}
              width="40%"
              required="true"
            />
            <Input
              text="Estado civil"
              type="text"
              name="maritalStatus"
              value={form.maritalStatus}
              onChange={handleForm}
              width="40%"
              required="false"
            />
             <Input
              text="Local de nascimento"
              type="text"
              name="birthPlace"
              value={form.birthPlace}
              onChange={handleForm}
              width="40%"
              required="true"
            />
            <Input
              text="Nacionalidade"
              type="text"
              name="nationality"
              value={form.nationality}
              onChange={handleForm}
              width="40%"
              required="true"
            />
            <Input
              text="E-mail"
              type="text"
              name="email"
              value={form.email}
              onChange={handleForm}
              width="40%"
              required="true"
            />
            <Input
              text="Escolaridade"
              type="text"
              name="schooling"
              value={form.schooling}
              onChange={handleForm}
              width="40%"
              required="true"
            />
            <Input
              text="Ocupação"
              type="text"
              name="occupation"
              value={form.occupation}
              onChange={handleForm}
              width="40%"
              required="false"
            />
          </ContentInput>
        </FillInput>
        <Button text='Finalizar' onClick={() => console.log('cliquei')} />
      </FormDiv>
    </>
  );
}