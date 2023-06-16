import api from "./api";

export async function signIn(form){
    const response = await api.post('/sign-in', form)
    return response.data
}

export async function logOut(token){
    const response = await api.delete("/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    return response
}