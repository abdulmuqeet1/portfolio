import { combineReducers } from '@reduxjs/toolkit';
import App from './app';
import SectionSlice from './sectionSlice';
import MenuSlice from './menuSlice';

const rootReducer = combineReducers({
  app: App,
  section: SectionSlice,
  menu: MenuSlice,
});

export default rootReducer;
