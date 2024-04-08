import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosConfig from "../../Axios/AxiosConfig";

const initialState = {
  data: {},
  isLoading: false,
  error: null,
};

const RegisterForm = createAsyncThunk("register-action", async (data) => {
  return await AxiosConfig({
    url: "/register",
    method: "POST",
    data: data,
  });
});
const registerSlice = createSlice({
  name: "register",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(RegisterForm.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const registerReducer = registerSlice.reducer;
