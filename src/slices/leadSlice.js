import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    leads: [
        {
            id: 1,
            name: "John Doe",
            contact: "+123456789",
            leadType: "Hot",
            status: "Open",
            counsellor: "",
            backendManager: "",
            mentor: "",
            appointment: { date: "", timeSlot: "", type: "" },
            createdAt: "2024-06-15",

        },
        {
            id: 2,
            name: "Alice Johnson",
            contact: "+987654321",
            leadType: "Cold",
            status: "Contacted",
            counsellor: "Mike Brown",
            backendManager: "",
            mentor: "",
            appointment: { date: "12-12-2024", timeSlot: "10:00", type: "in-person" },
            createdAt: "2024-06-15",

        },
    ],
};

export const leadsSlice = createSlice({
    name: "leads",
    initialState,
    reducers: {
        assignTeamMember: (state, action) => {
            const { id, teamMembers } = action.payload;
            console.log("team members", teamMembers);
            const lead = state.leads.find((lead) => lead.id === id);
            if (lead) {
                lead.counsellor = teamMembers.counsellor || "";
                lead.backendManager = teamMembers.backendManager || "";
                lead.mentor = teamMembers.mentor || "";
            }
        },
        scheduleAppointment: (state, action) => {
            const { id, appointmentData } = action.payload;
            const lead = state.leads.find((lead) => lead.id === id);
            if (lead) {
                console.log("Before update:", lead.appointment);
                lead.appointment = appointmentData;
                console.log("After update:", lead.appointment);
            } else {
                console.error(`Lead with ID ${id} not found`);
            }
        },

    },
});

export const { assignTeamMember, scheduleAppointment } = leadsSlice.actions;

export default leadsSlice.reducer;
