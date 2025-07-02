import { createSlice } from '@reduxjs/toolkit';

export const App = createSlice({
  name: 'app',
  initialState: {
    loader: false,
    ready: true, // set to false
    loadingProgress: 0,
  },
  reducers: {
    setLoader: (state, action) => ({
      ...state,
      loader: action.payload,
    }),
    setReady: (state, action) => ({
      ...state,
      ready: action.payload,
    }),
    setLoadingProgress: (state, action) => ({
      ...state,
      ready: action.payload,
    }),
  },
});

export const { setLoader, setReady, setLoadingProgress } = App.actions;

export default App.reducer;
