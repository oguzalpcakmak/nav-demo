// redux/authSlice.ts

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn(state) {
      state.isAuthenticated = true;
    },
    signOut(state) {
      state.isAuthenticated = false;
    },
  },
});

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
