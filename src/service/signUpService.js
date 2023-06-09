import api from "./api";

export async function signUp(form){
    const response = await api.post('/user', form)
    return response.data
}