import axios from "axios";

const API_URL = "https://chatbotbackend-xap9.onrender.com/api";

// Function to fetch all responses
export const fetchResponses = async () => {
  const response = await axios.get(`${API_URL}/responses`);
  return response;
};

// Function to send a query to the chatbot...........
export const sendQuery = async (query) => {
  const response = await axios.post(`${API_URL}/chat`, { query });
  return response;
};

// Function to save a response
export const saveResponse = async (responseWithUser) => {
  const res = await axios.post(`${API_URL}/save-response`, responseWithUser);
  return res;
};

// Function to register a user
export const registerUser = async (username, password) => {
  const response = await axios.post(`${API_URL}/signup`, {
    username,
    password,
  });
  return response;
};

// Function to login a user
export const loginUser = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response;
};

// Function to fetch all users
export const fetchUsersData = async () => {
  const res = await axios.get(`${API_URL}/users`);
  console.log(res);
  return res;
};
