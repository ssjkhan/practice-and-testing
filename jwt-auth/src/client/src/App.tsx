import { useState } from "react";
import axios from "axios";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import GetData from "./components/GetData";
import GetAuthData from "./components/GetAuthData";

function App() {
  function register() {
  }
  return (
    <div className="centered">
      <Login />
      <Logout />
      <GetData />
      <GetAuthData />
      <Register />
    </div>
  );
}

export default App;
