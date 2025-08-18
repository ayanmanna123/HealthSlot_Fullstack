import { createSlice, isAction } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctor: null,
    singelDoctor:null
  },
  reducers: {
    setdoctor: (state, action) => {
      state.doctor = action.payload;
    },
    setsingelDoctor:(state, action) => {
      state.singelDoctor = action.payload;
    },
  },
});
export const { setdoctor ,setsingelDoctor } = doctorSlice.actions;
export default doctorSlice.reducer;
