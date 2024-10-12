// components/Register.js
import React from "react";
import useRegister from "../../hooks/useRegister";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const { username, password, setUsername, setPassword, handleSubmit } =
    useRegister();
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800  ">
      <form
        className="flex flex-col gap-5 max-w-[600px] w-full p-10 bg-gray-900 rounded-3xl border border-gray-700"
        onSubmit={handleSubmit}
      >
        <p className="title">Register</p>
        <p className="message">Signup now and get full access to our app.</p>

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
          Register
        </button>
        <p className="signin ">
          Already have an account?{" "}
          <span
            className="hover:cursor-pointer text-blue-500"
            onClick={() => {
              navigate("/login");
            }}
          >
            login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
