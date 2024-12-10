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
            state.sections.push(action.payload);
        },
        updateSection: (state, action) => {
            const { index, updatedSection } = action.payload;
            state.sections[index] = updatedSection;
        },
        deleteSection: (state, action) => {
            const index = action.payload;
            if (state.sections[index]) {
                state.sections[index].content = ""; // Clear the content of the specified section
            }
        },
    },
});

export const { addSection, updateSection, deleteSection } = collegeSectionsSlice.actions;
export default collegeSectionsSlice.reducer;
