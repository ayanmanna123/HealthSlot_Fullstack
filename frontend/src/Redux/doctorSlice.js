import { createSlice, isAction } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctor: null,
    singelDoctor:null,
    searchdata:null,
    searchword:"",
  },
  reducers: {
    setdoctor: (state, action) => {
      state.doctor = action.payload;
    },
    setsingelDoctor:(state, action) => {
      state.singelDoctor = action.payload;
    },
     setsearchdata:(state, action) => {
      state.searchdata = action.payload;
    },
     setsearchword:(state, action) => {
      state.searchword = action.payload;
    },
  },
});
export const { setdoctor ,setsingelDoctor,setsearchdata,setsearchword} = doctorSlice.actions;
export default doctorSlice.reducer;
