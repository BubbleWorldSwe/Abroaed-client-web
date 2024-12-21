import { configureStore } from "@reduxjs/toolkit";
import collegeSlice from "../slices/collegeSlice"; // Import the college slice
import destinationSlice from "../slices/destinationSlice"; // Import the college slice
import collegeSectionsReducer from "../slices/collegeSectionSlice"; // Correct import
import userSlice from "../slices/userSlice"; // Correct import
import teamReducer from "../slices/teamSlice"; // Correct import
import leadsReducer from "../slices/leadSlice"; // Correct import
import destinationSectionsReducer from "../slices/destinationSectionSlice"; // Correct import

const adminStore = configureStore({
    reducer: {
        destinations: destinationSlice,
        destinationSections: destinationSectionsReducer,
        colleges: collegeSlice, // Add college reducer
        collegeSections: collegeSectionsReducer, // Add college reducer
        user: userSlice,
        team: teamReducer,
        leads: leadsReducer,
    },
});

export default adminStore;
