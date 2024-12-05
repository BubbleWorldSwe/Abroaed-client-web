import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mock colleges data
const Colleges = [
    {
        name: "Harvard University",
        city: "Cambridge",
        country: "USA",
        website: "https://www.harvard.edu",
        email: "admissions@harvard.edu",
        contact: "+1 617-495-1000",
    },
    {
        name: "University of Oxford",
        city: "Oxford",
        country: "UK",
        website: "https://www.ox.ac.uk",
        email: "info@ox.ac.uk",
        contact: "+44 1865 270000",
    },
    {
        name: "Stanford University",
        city: "Stanford",
        country: "USA",
        website: "https://www.stanford.edu",
        email: "admissions@stanford.edu",
        contact: "+1 650-723-2300",
    },
    {
        name: "University of Toronto",
        city: "Toronto",
        country: "Canada",
        website: "https://www.utoronto.ca",
        email: "admissions@utoronto.ca",
        contact: "+1 416-978-2011",
    },
    {
        name: "Australian National University",
        city: "Canberra",
        country: "Australia",
        website: "https://www.anu.edu.au",
        email: "admissions@anu.edu.au",
        contact: "+61 2 6125 5111",
    },
];

// Simulated GET request with a delay
export const fetchColleges = createAsyncThunk(
    "colleges/fetchColleges",
    async (_, { rejectWithValue }) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([...Colleges]); // Return the updated mock array.
            }, 1000);
        });
    }
);

// Simulated POST request with a delay
export const addCollege = createAsyncThunk(
    "colleges/addCollege",
    async (collegeData, { dispatch, rejectWithValue }) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                Colleges.push(collegeData); // Append the new college to the mock array.
                resolve(collegeData); // Return the added college.
            }, 1000);
        });
    }
);

const collegeSlice = createSlice({
    name: "colleges",
    initialState: {
        colleges: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchColleges.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchColleges.fulfilled, (state, action) => {
                state.loading = false;
                state.colleges = action.payload; // Update the colleges state with the new list.
            })
            .addCase(fetchColleges.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addCollege.pending, (state) => {
                state.loading = true;
            })
            .addCase(addCollege.fulfilled, (state, action) => {
                state.loading = false;
                // Append the new college to the existing list in the state.
                state.colleges = [...state.colleges, action.payload];
            })
            .addCase(addCollege.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default collegeSlice.reducer;
