/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

export const ImageSlice = createSlice({
  name: 'images',
  initialState: {},
  reducers: {
    addImage: (state, action) => ({
      ...state,
      [action.payload.name]: {
        hover: false,
        sizes: action.payload.sizes,
      },
    }),
    showImage: (state, action) => {
      const name = action.payload.name as string;
      const imageObj = (state as { [name: string]: any })[name];
      return {
        ...state,
        [name]: {
          ...imageObj,
          hover: action.payload.showImage || false,
        },
      };
    },
    // hideImage(state, action){
    //   const name = action.payload as string;
    //   const imageObj = (state as { [name: string]: any })[name];
    //         return {
    //     ...state,
    //     [name]: {
    //       ...imageObj,
    //       hover: false,
    //     },
    //   };
    // }
  },
});

export const { addImage, showImage } = ImageSlice.actions;

export default ImageSlice.reducer;
