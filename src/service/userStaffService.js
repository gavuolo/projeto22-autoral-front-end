import api from "./api";

export async function specialityRegister(name, token) {
  const response = await api.post("/user/staff/speciality/create", name, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function userStaffRegister(form, token) {
  const response = await api.post("/user/staff", form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function findRegisterUserStaff(token){
  const response = await api.get("/user/staff/find", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
