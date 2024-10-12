import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsersData } from "../../axios/api";
import PopupModal from "./PopupModal";
const AdminPanel = () => {
  const [users, setUsers] = useState([]); // State to store users fetched from API
  const [selectedUserResponses, setSelectedUserResponses] = useState([]); // State to store responses of a selected user
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const dispatch = useDispatch();

  // Fetch users from the API when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetchUsersData();
        console.log(res);
        setUsers(res.data); // Set users from API response
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Get saved responses from Redux store
  const savedResponses = useSelector((state) => state.responseStore.responses);
  console.log(savedResponses);
  // Show saved responses for a specific user by filtering the Redux store data
  const handleShowSavedResponses = (userId) => {
    const filteredResponses = savedResponses.filter(
      (response) => response.userId === userId
    );
    setSelectedUserResponses(filteredResponses); // Set the selected user's responses
    setShowModal(true); // Show modal to display responses
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="p-6 bg-gradient-to-b from-gray-900 to-gray-700 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-2xl mx-auto">
        <div className="logout-container">
          <button onClick={handleLogout} className="Btn flex items-center">
            <div className="sign mr-2">
              <svg viewBox="0 0 512 512" className="w-5 h-5">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
              </svg>
            </div>
            <div className="text text-white">Logout</div>
          </button>
        </div>
        <h1 className="text-3xl font-bold text-white mb-6">User List</h1>

        <ul className="bg-gray-800 rounded-lg p-6 shadow-lg space-y-4">
          {/* Loop through users and create a list with a button to show saved responses */}
          {users.map((user) => (
            <li
              key={user._id}
              className="flex justify-between items-center border-b border-gray-700 pb-2"
            >
              <p className="text-lg text-white font-semibold">
                {user.username}
              </p>
              <button
                onClick={() => handleShowSavedResponses(user._id)}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Show Saved Responses
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal to display saved responses for a selected user */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <PopupModal
            setShowModal={setShowModal}
            selectedUserResponses={selectedUserResponses}
          />
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
