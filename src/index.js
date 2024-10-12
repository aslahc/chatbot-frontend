import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate
import { store, persistor } from "./store/store"; // Import your store and persistor
import App from "./App";
import "./index.css";
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {" "}
      {/* Add PersistGate */}
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
