import api from "./api";

export async function specialityRegister(name, token) {
  const response = await api.post("/staff/create/speciality", name, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function userStaffRegister(form, token) {
  const response = await api.post("/staff/user", form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
