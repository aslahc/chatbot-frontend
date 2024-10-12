import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses, sendQuery, saveResponse } from "../../axios/api";
import { Menu, X, ChevronDown } from "lucide-react";
import HistoryModal from "../popup/HistoryModal";
import Header from "./Header";
import ResponseDisplay from "./ResponseDisplay";
const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const dispatch = useDispatch();
  const user = useSelector((state) => state.authStore.user);
  const responses = useSelector((state) => state.responseStore.responses);

  // Fetch all responses on component mount
  useEffect(() => {
    const fetchAllResponses = async () => {
      try {
        const res = await fetchResponses();
        dispatch({ type: "SAVE_ALL_RESPONSES", payload: res.data });
      } catch (error) {
        setErrorMessage("Failed to fetch responses.");
      }
    };

    fetchAllResponses();
  }, [dispatch]);

  const handleSend = async () => {
    if (!query.trim()) {
      setErrorMessage("Please enter a question.");
      return;
    }
    setErrorMessage("");
    try {
      const res = await sendQuery(query);
      setResponse(res.data);
      setQuery("");
    } catch (error) {
      setErrorMessage("Error in fetching response.");
    }
  };

  const handleSave = async () => {
    if (!response) return;
    try {
      const responseWithUser = { ...response, userId: user._id };
      const res = await saveResponse(responseWithUser);
      dispatch({ type: "SAVE_RESPONSE", payload: responseWithUser });
    } catch (error) {
      setErrorMessage("Failed to save response.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal state
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-900 to-gray-700 min-h-screen flex flex-col items-center">
      <div className="mb-4 w-full max-w-md text-center">
        <Header
          user={user}
          toggleModal={toggleModal}
          handleLogout={handleLogout}
          handleSend={handleSend}
          setQuery={setQuery}
          query={query}
        />
      </div>

      {errorMessage && <p className="text-red-400 mb-1">{errorMessage}</p>}

      {response && (
        <div className="mt-2 p-6 w-full max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
          <ResponseDisplay response={response} handleSave={handleSave} />
        </div>
      )}

      {/* Modal for showing saved responses */}
      <HistoryModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        responses={responses}
      />
    </div>
  );
};

export default Chatbot;
