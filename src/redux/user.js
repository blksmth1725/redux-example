import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: { name: "Christian", age: 0, email: "csheen@watchsytems.com" },
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default userSlice.reducer;
