import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    signInSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signInRequest, signInSuccess, signInFailure } = authSlice.actions;

export default authSlice.reducer;
