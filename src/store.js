import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Import rootReducer from the correct path

const store = configureStore({
  reducer: rootReducer,
});

export default store;
