const HistoryModal = ({ isOpen, onClose, responses }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 max-w-md max-h-[80vh] overflow-y-auto relative">
        <h3 className="text-xl font-semibold text-white">Saved Responses</h3>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-400 hover:text-red-600 text-4xl font-bold leading-none"
        >
          &times;
        </button>
        {responses.length > 0 ? (
          <div className="overflow-y-auto max-h-[70vh]">
            {" "}
            {/* Container for scrollable content */}
            {responses.map((resp) => (
              <div
                key={resp._id}
                className="py-2 border-b border-gray-500 mb-2"
              >
                <p className="font-medium text-white">Query: {resp.query}</p>
                <p className="text-gray-300">Summary: {resp.summary}</p>
                {resp.result_table_path && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Table Results
                    </h4>
                    <iframe
                      src={resp.result_table_path}
                      title="Table"
                      className="w-full h-56 border border-gray-600 rounded"
                    ></iframe>
                  </div>
                )}
                {resp.result_visualization_path && (
                  <div className="mb-3">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Visualization
                    </h4>
                    <iframe
                      src={resp.result_visualization_path}
                      title="Visualization"
                      className="w-full h-56 border border-gray-600 rounded"
                    ></iframe>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No saved responses yet.</p>
        )}
      </div>
    </div>
  );
};

export default HistoryModal;
