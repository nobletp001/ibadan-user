// toastSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToastState {
  message: string | null;
  type: 'success' | 'error' | 'warning';
}

const initialState: ToastState = {
  message: null,
  type: 'success',
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<ToastState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    hideToast: (state) => {
      return {
        ...state,
        message: null,
      };
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
