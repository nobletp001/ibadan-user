// store.ts
import { configureStore } from '@reduxjs/toolkit';
import toastReducer from './toastSlice';
import userReducer from './userSlice'
const store = configureStore({
  reducer: {
    toast: toastReducer,
    user:userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
