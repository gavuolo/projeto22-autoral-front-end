import { useState } from "react";
import React from "react";

export default function useForm(params) {
  const [form, setForm] = useState(params || {});

  function handleForm({ target: { value, name } }) {
    setForm({ ...form, [name]: value });
  }
  return [form, handleForm];
}
