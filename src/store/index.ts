import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'store/app/rootSlice';

const store = configureStore({
  reducer: rootReducer,
});
// window.store = store;

export default store;

export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
