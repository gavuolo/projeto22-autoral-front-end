import api from "./api";

export async function signIn(form){
    const response = await api.post('/sign-in', form)
    return response.data
}