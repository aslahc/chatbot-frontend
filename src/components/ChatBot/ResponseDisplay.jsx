// ResponseDisplay.js
import React from "react";

const ResponseDisplay = ({ response, handleSave }) => (
  <div>
    <h3 className="text-2xl font-bold text-white mb-4">
      Summary: {response.summary}
    </h3>
    <p className="text-gray-300 mb-1">{response.result_text}</p>

    {response.result_table_path && (
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-1">Table Results</h4>
        <iframe
          src={response.result_table_path}
          title="Table"
          className="w-full h-56 border border-gray-600 rounded"
        ></iframe>
      </div>
    )}

    {response.result_visualization_path && (
      <div className="mb-3">
        <h4 className="text-lg font-semibold text-white mb-1">Visualization</h4>
        <iframe
          src={response.result_visualization_path}
          title="Visualization"
          className="w-full h-56 border border-gray-600 rounded"
        ></iframe>
      </div>
    )}

    {response.error && (
      <div className="mb-3 p-4 bg-red-900 text-red-300 rounded-md">
        Error: {response.error}
      </div>
    )}

    <button
      onClick={handleSave}
      className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors duration-300 transform hover:scale-105"
    >
      Save Response
    </button>
  </div>
);

export default ResponseDisplay;
