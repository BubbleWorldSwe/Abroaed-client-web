import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    teamMembers: [
        { id: 1, name: "Jane Smith", role: "Counsellor", assignedStudents: [] },
        { id: 2, name: "Mike Brown", role: "Backend Manager", assignedStudents: [] },
        { id: 3, name: "Mike Black", role: "Backend Manager", assignedStudents: [] },
        { id: 4, name: "Sarah White", role: "Mentor", assignedStudents: [] },
    ],
};

const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers: {
        addTeamMember: (state, action) => {
            state.teamMembers.push(action.payload);
        },
        updateTeamMember: (state, action) => {
            const { index, updatedMember } = action.payload;
            if (index >= 0 && index < state.teamMembers.length) {
                state.teamMembers.splice(index, 1, updatedMember);
            }
        },
        deleteTeamMember: (state, action) => {
            const index = action.payload;
            state.teamMembers.splice(index, 1);
        },
        assignStudentToTeamMember: (state, action) => {
            const { teamMemberId, studentName } = action.payload;
            const member = state.teamMembers.find((tm) => tm.id === teamMemberId);
            if (member) {
                console.log("adding student," + studentName, "to team member with id:", teamMemberId);
                member.assignedStudents.push(studentName);
            }
        },
    },
});

export const { addTeamMember, updateTeamMember, deleteTeamMember, assignStudentToTeamMember } =
    teamSlice.actions;

export default teamSlice.reducer;
