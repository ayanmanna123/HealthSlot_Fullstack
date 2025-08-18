import { createSlice, isAction } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctor: null,
  },
  reducers: {
    setdoctor: (state, action) => {
      state.doctor = action.payload;
    },
  },
});
export const { setdoctor } = doctorSlice.actions;
export default doctorSlice.reducer;
