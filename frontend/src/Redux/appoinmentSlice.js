import { createSlice } from "@reduxjs/toolkit";

const appoinmentSlice = createSlice({
  name: "appoinment",
  initialState: {
    patentappoinment:null
  },
  reducers: {
    setpatentappoinment: (state, action) => {
      state.patentappoinment = action.payload;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { setpatentappoinment} = appoinmentSlice.actions;

export default appoinmentSlice.reducer;
