import { configureStore } from "@reduxjs/toolkit";
import collegeSlice from "../slices/collegeSlice"; // Import the college slice
import destinationSlice from "../slices/destinationSlice"; // Import the college slice
import collegeSectionsReducer from "../slices/collegeSectionSlice"; // Correct import
import userSlice from "../slices/userSlice"; // Correct import

const adminStore = configureStore({
    reducer: {
        destinations: destinationSlice,
        colleges: collegeSlice, // Add college reducer
        collegeSections: collegeSectionsReducer, // Add college reducer
        user: userSlice
    },
});

export default adminStore;
