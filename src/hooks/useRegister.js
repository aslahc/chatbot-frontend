// hooks/useRegister.js
import { useState } from "react";
import { registerUser } from "../axios/api";

const useRegister = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Connecting to backend...");
      const response = await registerUser(username, password);
      alert(response.data.message);
    } catch (error) {
      alert("Error creating user");
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

export default useRegister;
