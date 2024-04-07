// userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  accessToken: string | null;
  refreshToken: string | null;
  userLogged: boolean; // New boolean flag
}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("userState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: UserState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("userState", serializedState);
  } catch {
    // Handle errors here
  }
};

const initialState: UserState = loadState() || {
  accessToken: null,
  refreshToken: null,
  userLogged: false, // Initialize userLogged as false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTokens: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.userLogged = true; // Set userLogged to true when setting tokens
      saveState(state);
    },
    clearTokens: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.userLogged = false; // Set userLogged to false when clearing tokens
      saveState(state);
    },
  },
});

export const { setTokens, clearTokens } = userSlice.actions;
export const selectTokens = (state: { user: UserState }) => ({
  accessToken: state.user.accessToken,
  refreshToken: state.user.refreshToken,
  userLogged: state.user.userLogged,
});

export default userSlice.reducer;
