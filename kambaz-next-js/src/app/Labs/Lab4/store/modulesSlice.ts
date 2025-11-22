"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Module = {
  id: string;
  courseId: string;
  title: string;
  description?: string;
};

const uid = () => Math.random().toString(36).slice(2, 9);

const initialState: Module[] = [];

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: {
      reducer(state, action: PayloadAction<Module>) {
        state.push(action.payload);
      },
      prepare(payload: { courseId: string; title: string; description?: string }) {
        return {
          payload: { id: uid(), courseId: payload.courseId, title: payload.title, description: payload.description || "" },
        };
      },
    },
    updateModule(state, action: PayloadAction<Module>) {
      const idx = state.findIndex((m) => m.id === action.payload.id);
      if (idx >= 0) state[idx] = action.payload;
    },
    deleteModule(state, action: PayloadAction<string>) {
      return state.filter((m) => m.id !== action.payload);
    },
  },
});

export const { addModule, updateModule, deleteModule } = modulesSlice.actions;
export default modulesSlice.reducer;
