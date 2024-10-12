// components/Login.js
import React from "react";
import useLogin from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { username, password, setUsername, setPassword, handleSubmit } =
    useLogin();
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <form
        className="flex flex-col gap-5 max-w-[600px] w-full p-10 bg-gray-900 rounded-3xl border border-gray-700"
        onSubmit={handleSubmit}
      >
        <p className="title">Login</p>
        <p className="message">Welcome back! Please log in to your account.</p>

        <label>
          <input
            className="input1"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label>
          <input
            className="input1"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button className="submit" type="submit">
          Login
        </button>

        <p className="signin">
          Don't have an account?{" "}
          <span
            className="hover:cursor-pointer text-blue-500"
            onClick={() => navigate("/signup")} // Navigate to register page
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
