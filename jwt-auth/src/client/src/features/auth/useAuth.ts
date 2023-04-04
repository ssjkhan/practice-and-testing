import { useContext, useEffect } from "react";
import { AuthContext } from "./Auth";

export default function useAuth() {
  const auth = useContext(AuthContext);

  function login() {
    console.log("logged in");
  }

  function logout() {
    console.log("logged out");
  }

  return { login, logout, auth };
}
