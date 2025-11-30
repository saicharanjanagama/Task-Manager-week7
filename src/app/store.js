import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/task/taskSlice"

// --- Load tasks from localStorage ---
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },

    preloadedState: {
        tasks: savedTasks,
    },
});

// --- Save tasks to localStorage whenever store updates ---
store.subscribe(() => {
    localStorage.setItem("tasks", JSON.stringify(store.getState().tasks));
});