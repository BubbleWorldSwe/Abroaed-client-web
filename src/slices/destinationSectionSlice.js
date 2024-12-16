import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sections: [
        {
            title: "Overview",
            content: {
                description: "",
                capital: "",
                totalPopulation: "",
                language: "",
                totalStudents: "",
                totalUniversities: "",
                Currency: "USD",
                DailingCode: "",
            },
        },

        {
            title: "Expenses",
            content: [
                {
                    AvgTutionFee: "",
                    AvgRent: "",
                    AvgFoodExpense: "",
                    AvgTransportExpense: "",
                    MiscExpense: "",

                },
            ],
        },
        {
            title: "Financial Aid and Scholarships",
            content: [
                {
                    scholarshipName: "xyz",
                    link: "",
                    description: "",
                },

            ],
        },
        {
            title: "FAQs",
            content: [
                {
                    question: "ques",
                    answer: "ans1",
                },
                {
                    question: "ques",
                    answer: "ans2",
                },
            ],
        },
    ],
};

export const destinationSectionsSlice = createSlice({
    name: "destinationSections",
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
    destinationSectionsSlice.actions;

export default destinationSectionsSlice.reducer;
