"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Course = {
  id: string;
  title: string;
  description?: string;
};

const uid = () => Math.random().toString(36).slice(2, 9);

const initialState: Course[] = [
  { id: uid(), title: "Sample Course", description: "A sample course" },
];

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: {
      reducer(state, action: PayloadAction<Course>) {
        state.push(action.payload);
      },
      prepare(payload: { title: string; description?: string }) {
        return {
          payload: { id: uid(), title: payload.title, description: payload.description || "" },
        };
      },
    },
    updateCourse(state, action: PayloadAction<Course>) {
      const idx = state.findIndex((c) => c.id === action.payload.id);
      if (idx >= 0) state[idx] = action.payload;
    },
    deleteCourse(state, action: PayloadAction<string>) {
      return state.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addCourse, updateCourse, deleteCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
