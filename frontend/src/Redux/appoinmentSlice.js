import { createSlice } from "@reduxjs/toolkit";

const appoinmentSlice = createSlice({
  name: "appoinment",
  initialState: {
    patentappoinment:null,
    doctorAppoinment:null
  },
  reducers: {
    setpatentappoinment: (state, action) => {
      state.patentappoinment = action.payload;
    },
     setdoctorAppoinment: (state, action) => {
      state.doctorAppoinment = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setpatentappoinment ,setdoctorAppoinment} = appoinmentSlice.actions;

export default appoinmentSlice.reducer;
