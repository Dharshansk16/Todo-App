"use client";

import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/app/_constants/constants";
import { handleLogin } from "@/app/actions/action";
import React from "react";

export default function Login() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = await handleLogin(formData);
    console.log(data.access);
    console.log(data.refresh);
    localStorage.setItem(ACCESS_TOKEN, data.access);
    localStorage.setItem(REFRESH_TOKEN, data.refresh);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
