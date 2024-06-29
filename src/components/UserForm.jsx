"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
      return;
    } else {
      router.refresh();
      router.push("/");
    }
  };
  return (
    <section className="flex flex-col p-4 rounded-lg bg-[#001845] text-white w-full min-[600px]:w-[600px]">
      <form onSubmit={handleSubmit} method="post" className="flex flex-col">
        <h1 className="text-2xl font-semibold text-[#EB9D34]">Registrarse</h1>
        {errorMessage && (
          <div className="w-full bg-red-400 border-[1px] border-red-800 text-red-800 rounded-lg font-semibold px-2 mt-2">
            {errorMessage}
          </div>
        )}
        <label htmlFor="name">Nombre Completo</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          required
          value={formData.name}
        />
        <label htmlFor="email">Correo Electronico</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          required
          value={formData.email}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          required
          value={formData.password}
        />
        <input
          type="submit"
          value="Registrarse"
          className="primary-button bg-black text-white cursor-pointer mt-4"
        />
      </form>
    </section>
  );
};

export default UserForm;
