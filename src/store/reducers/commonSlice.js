import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  redirectTo: null,
  isRouteChange:null
};

const redirectSlice = createSlice({
  name: 'redirect',
  initialState,
  reducers: {
    setRedirectTo: (state, action) => {
      state.redirectTo = action.payload;
      state.isRouteChange = Math.random()
    },
  },
});

export const { setRedirectTo } = redirectSlice.actions;
export default redirectSlice.reducer;
