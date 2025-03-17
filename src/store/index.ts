import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'store/app/rootSlice';

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
