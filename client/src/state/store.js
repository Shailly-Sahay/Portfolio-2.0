import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import globalReducer from "./state"; // Import the reducer

// Redux Persist Config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["global"], // Specify which reducers should be persisted
};

const rootReducer = combineReducers({
  global: globalReducer, // Add your reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Avoid Redux Persist warnings
    }),
});

export const persistor = persistStore(store);
