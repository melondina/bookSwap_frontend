import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
  location: undefined,
};

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, action) => {
        return action.payload;
      },
      resetLocation: () => [],
    },
  });

  export const selectLocation = (state) => state.location;
  
  export const { setLocation, resetLocation } = locationSlice.actions;
  export default locationSlice.reducer;