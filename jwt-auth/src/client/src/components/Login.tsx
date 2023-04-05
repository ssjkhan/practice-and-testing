import useAuth from "@features/auth/useAuth";
import { SyntheticEvent, useState } from "react";

type loginStateType = {
  username: string;
  password: string;
};

export default function Login() {
  const { login } = useAuth();
  const [loginState, setLoginState] = useState(
    { "username": "123", "password": "1234" } as loginStateType,
  );

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const data = await login(loginState.username, loginState.password);
    console.log(data);
    setLoginState({} as loginStateType);
  }

  function handleChange(e: SyntheticEvent) {
    const input = e.target as HTMLInputElement;
    setLoginState({ ...loginState, [input.name]: [input.value] });
  }

  return (
    <div className="form-el">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={loginState["username"]}
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={loginState["password"]}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
