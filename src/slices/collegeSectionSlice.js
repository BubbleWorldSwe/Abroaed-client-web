import { createSlice } from "@reduxjs/toolkit";

const OverviewContentType = {
    content: {
        about: "",
        estYear: "",
        qsWorldRanking: "",
        intake: "",
        totalStudents: "",
        maleToFemaleRatio: "",
        studentToTeacherRatio: "",
    },
}


const initialState = {
    sections: [
        {
            title: "Overview",
            content: [],
        },
        {
            title: "Media Gallery",
            content: {
                images: [], // Array of image URLs or objects with additional metadata (e.g., size)
            },
        },
        {
            title: "Courses",
            content: [

            ],
        },
        {
            title: "Financial Aid and Scholarships",
            content: [

            ],
        },
        {
            title: "FAQs",
            content: [

            ],
        },
    ],
};

export const collegeSectionsSlice = createSlice({
    name: "collegeSections",
    initialState,
    reducers: {
        updateContent: (state, action) => {
            const { sectionTitle, updatedContent } = action.payload;
            const section = state.sections.find(sec => sec.title === sectionTitle);
            if (section) {
                if (Array.isArray(section.content)) {
                    // For array-based sections (Courses, Financial Aid, FAQs)
                    section.content = updatedContent;
                } else {
                    // For object-based sections (Overview, Media Gallery)
                    section.content = { ...section.content, ...updatedContent };
                }
            }
        },
        addItemToSection: (state, action) => {
            const { sectionTitle, newItem } = action.payload;
            const section = state.sections.find(sec => sec.title === sectionTitle);
            if (section && Array.isArray(section.content)) {
                section.content.push(newItem);
            }
        },
        updateItemInSection: (state, action) => {
            const { sectionTitle, itemIndex, updatedItem } = action.payload;
            const section = state.sections.find(sec => sec.title === sectionTitle);
            if (section && Array.isArray(section.content) && section.content[itemIndex]) {
                section.content[itemIndex] = { ...section.content[itemIndex], ...updatedItem };
            }
        },
        deleteItemFromSection: (state, action) => {
            const { sectionTitle, itemIndex } = action.payload;
            const section = state.sections.find(sec => sec.title === sectionTitle);
            if (section && Array.isArray(section.content)) {
                section.content.splice(itemIndex, 1);
            }
        },
    },
});

export const { updateContent, addItemToSection, updateItemInSection, deleteItemFromSection } =
    collegeSectionsSlice.actions;

export default collegeSectionsSlice.reducer;
