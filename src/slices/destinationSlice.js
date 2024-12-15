import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mock destinations data
const Destinations = [
    {
        pageName: "USA",
        author: "vijay",
        status: "published",
        createdAt: "12/01/2024",

    },

];

// Simulated GET request with a delay
export const fetchDestinations = createAsyncThunk(
    "destinations/fetchDestinations",
    async (_, { rejectWithValue }) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([...Destinations]); // Return the updated mock array.
            }, 1000);
        });
    }
);

// Simulated POST request with a delay
export const addDestination = createAsyncThunk(
    "destinations/addDestination",
    async (destinationData, { dispatch, rejectWithValue }) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                Destinations.push(destinationData); // Append the new destination to the mock array.
                resolve(destinationData); // Return the added destination.
            }, 1000);
        });
    }
);

const destinationSlice = createSlice({
    name: "destinations",
    initialState: {
        destinations: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDestinations.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchDestinations.fulfilled, (state, action) => {
                state.loading = false;
                state.destinations = action.payload; // Update the destinations state with the new list.
            })
            .addCase(fetchDestinations.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addDestination.pending, (state) => {
                state.loading = true;
            })
            .addCase(addDestination.fulfilled, (state, action) => {
                state.loading = false;
                // Append the new destination to the existing list in the state.
                state.destinations = [...state.destinations, action.payload];
            })
            .addCase(addDestination.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default destinationSlice.reducer;
