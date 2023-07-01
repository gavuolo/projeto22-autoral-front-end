import { useContext } from "react";
import { ContentInput, FillInput, FixedInput, FormDiv, Info } from "../../assets/styles/RegisterPageStyle";
import { Input } from "../../components/Form/Input";
import { NavBar } from "../../components/NavBar";
import UserContext from "../../context/userContext";
import useForm from "../../hooks/useForm";
import { Button } from "../../components/Form/Button";

export function ListMedicalRecordPage() {
  const { user } = useContext(UserContext);
  const [form, handleForm] = useForm({});
  return (
    <>
    <NavBar />
    <FormDiv>
        <Info>
          <h2>Lista de prontuários.</h2>
        </Info>          
      </FormDiv>
    </>
  );
}