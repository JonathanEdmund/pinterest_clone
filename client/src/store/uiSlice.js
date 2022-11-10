import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: {},
  error: {},
  entry: { login: false, register: false },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setSuccess: (state, action) => {
      state.success.status = true;
      state.success.message = action.payload;
    },
    setError: (state, action) => {
      state.error.status = true;
      state.error.message = action.payload;
    },
    resetUIState: (state) => {
      state.loading = false;
      state.success = {};
      state.error = {};
    },
    setLoginEntry: (state) => {
      console.log("setlogin");
      state.entry.login = true;
    },
    setRegisterEntry: (state) => {
      state.entry.register = true;
    },
    resetEntry: (state) => {
      state.entry.login = false;
      state.entry.register = false;
    },
  },
});

export const {
  setLoading,
  setSuccess,
  setError,
  resetUIState,
  setLoginEntry,
  setRegisterEntry,
  resetEntry,
} = uiSlice.actions;

export default uiSlice.reducer;
export const selectedUI = (state) => state.ui;
