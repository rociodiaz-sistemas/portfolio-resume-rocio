import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
import { combineReducers } from "redux";
// import rootSaga from "./sagas/rootSaga"; // Import the root saga
// import { effectsReducer } from "./slices/effectsSlice";

// const sagaMiddleware = createSagaMiddleware();

// Combine reducers to create rootReducer
const rootReducer = combineReducers({
  // messages: messagesReducer,
  // obsActions: obsReducer,
  // effects: effectsReducer,
  // emails: emailReducer,
  // Add other reducers here if needed
});

// Define RootState type based on the return type of rootReducer
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
