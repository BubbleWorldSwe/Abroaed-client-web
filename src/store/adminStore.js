import { configureStore } from "@reduxjs/toolkit";
import collegeSlice from "../slices/collegeSlice"; // Import the college slice
import collegeSectionsReducer from "../slices/collegeSectionSlice"; // Correct import

const adminStore = configureStore({
    reducer: {
        colleges: collegeSlice, // Add college reducer
        collegeSections: collegeSectionsReducer, // Add college reducer
    },
});

export default adminStore;
