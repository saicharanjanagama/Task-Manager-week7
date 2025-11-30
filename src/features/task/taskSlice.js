import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload,
                status: "pending",
            });
        },

        deleteTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload);
        },

        toggleStatus: (state, action) => {
            const task = state.find((t) => t.id === action.payload);
            task.status = task.status === "pending" ? "completed" : "pending";
        },

        editTask: (state, action) => {
            const {id, newText} = action.payload;
            const task = state.find((t) => t.id === id);
            if (task) task.text = newText;
        },
    },
});

export const { addTask, deleteTask, toggleStatus, editTask } = taskSlice.actions;
export default taskSlice.reducer;