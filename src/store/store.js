import { createStore } from "redux";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { responseReducer, authReducer } from "./reducers"; // Import reducers

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    responseStore: responseReducer,
    authStore: authReducer, // Add auth reducer
  })
);

// Create the Redux store
const store = createStore(persistedReducer);
const persistor = persistStore(store);

// Export the store and persistor
export { store, persistor };
