import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: null,
  },
  reducers: {
    addLogin: (state, action) => {
      state.login = action.payload;
      console.log("add login");
      console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addLogin } = loginSlice.actions;

export default loginSlice.reducer;
