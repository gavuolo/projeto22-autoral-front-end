import api from "./api";

export async function userData(token){

    const response = await api.get("/sign-in", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    return response.data
}