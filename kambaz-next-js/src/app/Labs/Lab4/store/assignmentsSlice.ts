"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Assignment = {
  id: string;
  moduleId: string;
  title: string;
  dueDate?: string;
};

const uid = () => Math.random().toString(36).slice(2, 9);

const initialState: Assignment[] = [];

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: {
      reducer(state, action: PayloadAction<Assignment>) {
        state.push(action.payload);
      },
      prepare(payload: { moduleId: string; title: string; dueDate?: string }) {
        return {
          payload: { id: uid(), moduleId: payload.moduleId, title: payload.title, dueDate: payload.dueDate || "" },
        };
      },
    },
    updateAssignment(state, action: PayloadAction<Assignment>) {
      const idx = state.findIndex((a) => a.id === action.payload.id);
      if (idx >= 0) state[idx] = action.payload;
    },
    deleteAssignment(state, action: PayloadAction<string>) {
      return state.filter((a) => a.id !== action.payload);
    },
  },
});

export const { addAssignment, updateAssignment, deleteAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
