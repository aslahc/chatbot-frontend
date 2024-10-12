import React from "react";

const PopupModal = (setShowModal, selectedUserResponses) => {
  return (
    <div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 max-w-md max-h-[80vh] overflow-y-auto relative">
        <h3 className="text-xl font-semibold text-white">Saved Responses</h3>
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 text-red-400 hover:text-red-600 text-4xl font-bold leading-none"
        >
          &times;
        </button>

        {/* If there are responses, display them, else show a "no responses" message */}
        {selectedUserResponses.length > 0 ? (
          selectedUserResponses.map((response, index) => (
            <div key={index} className="py-2 border-b border-gray-500 mb-2">
              <h4 className="text-lg font-semibold text-white">
                Summary: {response.summary}
              </h4>
              <p className="text-gray-300">{response.result_text}</p>
              {response.result_table_path && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Table Results
                  </h4>
                  <iframe
                    src={response.result_table_path}
                    title="Table"
                    className="w-full h-56 border border-gray-600 rounded"
                  ></iframe>
                </div>
              )}
              {response.result_visualization_path && (
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Visualization
                  </h4>
                  <iframe
                    src={response.result_visualization_path}
                    title="Visualization"
                    className="w-full h-56 border border-gray-600 rounded"
                  ></iframe>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-400">No saved responses for this user.</p>
        )}
      </div>
    </div>
  );
};

export default PopupModal;
