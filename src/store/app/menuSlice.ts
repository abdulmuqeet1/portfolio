import { createSlice } from '@reduxjs/toolkit';

export const SectionSlice = createSlice({
  name: 'menu',
  initialState: {
    open: false,
    index: -1,
  },
  reducers: {
    open: (state, action) => ({
      ...state,
      open: action.payload,
    }),
    setIndex: (state, action) => ({
      ...state,
      index: action.payload,
    }),
  },
});

export const { open, setIndex } = SectionSlice.actions;

export default SectionSlice.reducer;
