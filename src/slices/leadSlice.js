import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    leads: [
        {
            id: 1,
            name: "John Doe",
            contact: "123-456-7890",
            leadType: "Cold",
            status: "New",
            counsellor: "Alice Smith",
            appointment: "2024-06-20",
            createdAt: "2024-06-15",
        },
        {
            id: 2,
            name: "Jane Doe",
            contact: "987-654-3210",
            leadType: "Warm",
            status: "Follow-up",
            counsellor: "Bob Johnson",
            appointment: "2024-06-21",
            createdAt: "2024-06-15",
        },
    ],
};

const leadsSlice = createSlice({
    name: "leads",
    initialState,
    reducers: {
        addLead: (state, action) => {
            state.leads.push(action.payload);
        },
        updateLead: (state, action) => {
            const { id, updatedData } = action.payload;
            const index = state.leads.findIndex((lead) => lead.id === id);
            if (index !== -1) {
                state.leads[index] = { ...state.leads[index], ...updatedData };
            }
        },
        deleteLead: (state, action) => {
            state.leads = state.leads.filter((lead) => lead.id !== action.payload);
        },
        assignTeamMember: (state, action) => {
            const { id, counsellor } = action.payload;
            const lead = state.leads.find((lead) => lead.id === id);
            if (lead) {
                lead.counsellor = counsellor;
            }
        },
    },
});

export const { addLead, updateLead, deleteLead, assignTeamMember } = leadsSlice.actions;
export default leadsSlice.reducer;
