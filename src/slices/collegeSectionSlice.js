import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sections: [
        {
            title: "Overview",
            content:
                "Stunning graphics, lightning-fast load times, and an impressive game library. The new controller's haptic feedback adds a whole new level of immersion. Truly a next-gen experience!",
        },
        { title: "Media Gallery", content: "Some content for media gallery" },
        { title: "Financial Aid and Scholarships", content: "" },
        { title: "Courses", content: "Some content for courses" },
        { title: "FAQs", content: "" },
    ],
};

export const collegeSectionsSlice = createSlice({
    name: "collegeSections",
    initialState,
    reducers: {
        addSection: (state, action) => {
            state.sections.push(action.payload); // Adds new section to the array
        },
        updateSection: (state, action) => {
            const { index, updatedSection } = action.payload;
            state.sections[index] = updatedSection; // Updates section by index
        },
        deleteSection: (state, action) => {
            state.sections.splice(action.payload, 1); // Deletes section by index
        },
    },
});

export const { addSection, updateSection, deleteSection } = collegeSectionsSlice.actions;
export default collegeSectionsSlice.reducer;
