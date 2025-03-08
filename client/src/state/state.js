import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarCollapsed: false,
  isHomePage: true,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsHomePage: (state, action) => {
      state.isHomePage = action.payload;
    },
    setIsSidebarCollapsed: (state, action) => {
      state.isSidebarCollapsed = action.payload;
    },
  },
});

export const { setIsSidebarCollapsed, setIsHomePage } = globalSlice.actions;
export default globalSlice.reducer;
