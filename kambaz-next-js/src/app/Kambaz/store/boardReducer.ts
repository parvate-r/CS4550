"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BoardState {
  backlog: string[];
  inProgress: string[];
  done: string[];
}

interface AddTaskPayload {
  column: keyof BoardState;
  task: string;
}

const initialState: BoardState = {
  backlog: ["Design landing page", "Collect course images", "Write syllabus"],
  inProgress: ["Implement Dashboard grid", "Integrate React Icons"],
  done: ["Project scaffold", "Lab 1 pages"],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<AddTaskPayload>) => {
      const { column, task } = action.payload;
      state[column].push(task);
    },
  },
});

export const { addTask } = boardSlice.actions;
export default boardSlice.reducer;
