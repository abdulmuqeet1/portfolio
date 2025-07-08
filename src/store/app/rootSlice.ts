import { combineReducers } from '@reduxjs/toolkit';
import App from './app';
import SectionSlice from './sectionSlice';
import MenuSlice from './menuSlice';
import ImageSlice from './imageSlice';

const rootReducer = combineReducers({
  app: App,
  section: SectionSlice,
  menu: MenuSlice,
  images: ImageSlice,
});

export default rootReducer;
