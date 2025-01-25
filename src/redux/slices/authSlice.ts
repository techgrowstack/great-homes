import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  displayName: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  displayName: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action: PayloadAction<{ displayName: string }>) => {
      state.isLoggedIn = true;
      state.displayName = action.payload.displayName;
    },
    REMOVE_ACTIVE_USER: (state) => {
      state.isLoggedIn = false;
      state.displayName = null;
    },
  },
});

export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions;
export const authReducer = authSlice.reducer;

// For useSelector hooks
export type RootState = {
  auth: AuthState;
};