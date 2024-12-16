import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    teamMembers: [
        // Add more team members as needed
    ],
};

const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers: {
        // Create (Add a new team member)
        addTeamMember: (state, action) => {
            state.teamMembers.push(action.payload);
        },
        // Read (Fetch all team members) - This is often handled by selectors
        // Update (Edit a team member)
        updateTeamMember: (state, action) => {
            const { index, updatedMember } = action.payload;
            state.teamMembers[index] = updatedMember;
        },
        // Delete (Remove a team member)
        deleteTeamMember: (state, action) => {
            const index = action.payload;
            state.teamMembers.splice(index, 1);
        },
    },
});

export const { addTeamMember, updateTeamMember, deleteTeamMember } = teamSlice.actions;
export default teamSlice.reducer;
