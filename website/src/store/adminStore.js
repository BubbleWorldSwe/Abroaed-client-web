import { configureStore } from '@reduxjs/toolkit';
import userSlice from "../slices/userSlice"
import dashboardSlice from "../slices/dashboardSlice"


const adminStore = configureStore({
    reducer: {
        users: userSlice,
        dashboard: dashboardSlice,
    },
});

export default adminStore;
