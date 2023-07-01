import api from "./api";

export async function userRecepcionistRegister(form, token) {
    const response = await api.post("/user/recepcionist", form, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }


  export async function findRegisterRecepcionist(token){
    const response = await api.get("/user/recepcionist/find", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }