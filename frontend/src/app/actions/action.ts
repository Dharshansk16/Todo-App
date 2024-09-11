"use server";

import { ACCESS_TOKEN, REFRESH_TOKEN } from "../_constants/constants";

export async function handleLogin(formData: FormData) {
  const apiUrl = "http://127.0.0.1:8000/api/token/";
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({
        username: formData.get("username") as string,
        password: formData.get("password") as string,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const resData = await response.json();
    return resData;
  } catch (error) {
    console.log("Error occured while fetching the data", error);
  }
}
