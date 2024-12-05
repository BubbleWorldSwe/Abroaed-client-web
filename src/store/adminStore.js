import { configureStore } from "@reduxjs/toolkit";
import collegeSlice from "../slices/collegeSlice"; // Import the college slice

const adminStore = configureStore({
    reducer: {
        colleges: collegeSlice, // Add college reducer
    },
});

export default adminStore;
