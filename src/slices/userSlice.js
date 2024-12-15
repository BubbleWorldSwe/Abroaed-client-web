import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: {
            id: 1,
            name: "Dev",
            age: 23,
            email: "dev@example.com",
            contact: "+1 123-456-7890",
        }, // Mock logged-in user
        loading: false,
        error: null,
    },
    reducers: {
        updateUser(state, action) {
            state.currentUser = { ...state.currentUser, ...action.payload }; // Update logged-in user info
        },
        clearUser(state) {
            state.currentUser = null; // Clear user info (e.g., on logout)
        },
    },
});

export const { updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
