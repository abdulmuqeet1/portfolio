import { createSlice } from '@reduxjs/toolkit';

export const App = createSlice({
  name: 'app',
  initialState: {
    loader: false,
    ready: true, // set to false
    loadingProgress: 0,
    windth: window.innerWidth || 1024,
    height: window.innerHeight || 680,
    pointerType: 'default',
    scroll: false,
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
    updateSize: (state, action) => ({
      ...state,
      width: action.payload.width,
      height: action.payload.height,
    }),
    setPointerType: (state, action) => ({
      ...state,
      pointerType: action.payload.pointerType,
    }),
    appScroll: (state, action) => ({
      ...state,
      scroll: action.payload || false,
    }),
  },
});

export const { setLoader, setReady, setLoadingProgress, updateSize, setPointerType } = App.actions;

export default App.reducer;
