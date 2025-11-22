"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import coursesReducer from "./coursesSlice";
import modulesReducer from "./modulesSlice";
import assignmentsReducer from "./assignmentsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    courses: coursesReducer,
    modules: modulesReducer,
    assignments: assignmentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
