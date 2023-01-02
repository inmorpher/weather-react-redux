import { createSlice } from "@reduxjs/toolkit";

export const useDataSlice = createSlice({
  name: "userData",
  initialState: {},
  reducers: {
    setUserData: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setUserData } = useDataSlice.actions;
export default useDataSlice.reducer;
