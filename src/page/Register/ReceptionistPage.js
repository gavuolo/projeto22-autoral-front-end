import { useContext } from "react";
import { NavBar } from "../../components/NavBar";
import UserContext from "../../context/userContext";
import { ContentInput, FillInput, FixedInput, FormDiv, Info } from "../../assets/styles/RegisterPageStyle";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import useForm from "../../hooks/useForm";
import { userRecepcionistRegister } from "../../service/userRecepcionistService";

export default function RegisterReceptionist(){
    const { user } = useContext(UserContext);
    const [form, handleForm] = useForm({});
async function Register(event){
    event.preventDefault();
    try{
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
        };
        const response = await userRecepcionistRegister(body, user.token);
        return console.log(response);


    }catch(error){
        return console.log(error.response.data);
    }
}
    return (<>
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
          </ContentInput>
        </FillInput>
        <Button onClick={Register} />
      </FormDiv>
    </>)
}