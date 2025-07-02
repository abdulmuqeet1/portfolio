import { createSlice } from '@reduxjs/toolkit';

interface Boundary {
  name: string;
  start: number;
  end: number;
}

export const SectionSlice = createSlice({
  name: 'section',
  initialState: {
    current: 'Hero',
    boundries: [] as Boundary[],
    sections: [
      { name: 'TCMG - MUQEET', id: 'hero' },
      { name: 'Works', id: 'portfolio' },
      { name: 'About', id: 'about' },
      { name: 'Contact', id: 'contact' },
    ],
  },
  reducers: {
    update: (state, action) => ({
      ...state,
      current: action.payload,
    }),
    setBoundary: (state, action) => {
      const currentIndex = state.boundries.findIndex(
        boundary => boundary.name === action.payload.name
      );
      return {
        ...state,
        boundries: [
          ...state.boundries.slice(0, currentIndex),
          action.payload,
          ...state.boundries.slice(0, currentIndex + 1),
        ],
      };
    },
  },
});

export const { update, setBoundary } = SectionSlice.actions;

export default SectionSlice.reducer;
