import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chatbot from "./components/ChatBot/Chatbot.jsx";
import AdminPanel from "./components/Admin/AdminPanel.jsx";
import Register from "./components/Auth/Register.jsx";
import Login from "./components/Auth/Login.jsx";
import PrivateRoute from "./Routes/PrivateRoute.js"; // Import PrivateRoute

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />

      <Route
        path="/admin"
        element={
          <PrivateRoute isAdminRoute={true}>
            <AdminPanel />
          </PrivateRoute>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Chatbot />
          </PrivateRoute>
        }
      />
    </Routes>
  </Router>
);

export default App;
