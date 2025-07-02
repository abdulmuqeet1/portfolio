import { combineReducers } from '@reduxjs/toolkit';
import App from './app';
import SectionSlice from './sectionSlice';

const rootReducer = combineReducers({
  app: App,
  section: SectionSlice,
});

export default rootReducer;
