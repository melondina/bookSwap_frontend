import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, action) => {
        return action.payload;
      },
      resetLocation: (state) => {
        return null;
        // state.location = undefined
       },
    },
  });

  export const selectLocation = (state) => state.location;
  
  export const { setLocation, resetLocation } = locationSlice.actions;
  export default locationSlice.reducer;