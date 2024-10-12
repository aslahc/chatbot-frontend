// hooks/useLogin.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../axios/api";

const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(username, password);
      console.log("Response:", response);

      if (response.data.token) {
        console.log("Logged in successfully");
        localStorage.setItem("token", response.data.token);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { user: response.data.user, token: response.data.token },
        });
        if (response.data.user.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return {
    username,
    password,
    setUsername,
    setPassword,
    handleSubmit,
  };
};

export default useLogin;
