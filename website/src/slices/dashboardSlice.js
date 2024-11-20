import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch dashboard data
export const fetchDashboardData = createAsyncThunk('dashboard/fetchData', async () => {
    const response = await axios.get('/api/dashboard');
    return response.data;
});

// Dashboard slice
const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        stats: {},
        loading: false,
        error: null,
    },
    reducers: {
        updateStat(state, action) {
            const { key, value } = action.payload;
            state.stats[key] = value;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDashboardData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDashboardData.fulfilled, (state, action) => {
                state.loading = false;
                state.stats = action.payload;
            })
            .addCase(fetchDashboardData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { updateStat } = dashboardSlice.actions;
export default dashboardSlice.reducer;
