import { useContext, useEffect } from "react";
import { AuthContext } from "./Auth";

const API_URI_BASE = "http://localhost:3000/api/auth";

export default function useAuth() {
  const auth = useContext(AuthContext);
  const body = JSON.stringify({ username: "asdf", password: "1234" });
  console.log(body);

  async function login(user: string, password: string) {
    console.log("logging in");
    const resp = await fetch(API_URI_BASE + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });

    return resp.json();
  }

  function logout() {
    console.log("logged out");
  }

  return { login, logout, auth };
}
