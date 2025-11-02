"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
  role: string;
}

const initialState: UserState = {
  name: "Guest User",
  email: "guest@example.com",
  role: "viewer",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updateRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
    resetUser: (state) => {
      state.name = "Guest User";
      state.email = "guest@example.com";
      state.role = "viewer";
    },
  },
});

export const { updateName, updateEmail, updateRole, resetUser } = userSlice.actions;
export default userSlice.reducer;
