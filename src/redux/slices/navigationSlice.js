import { createSlice } from '@reduxjs/toolkit';

export const navigationStatus = { get: "get", update: "update", send: "send", history: "history", delete: "delete" };

const initialState =  navigationStatus.get;

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {setNavigation: ( _, {payload} ) => (payload)},
  });
  
  export const { setNavigation } = navigationSlice.actions;
  export default navigationSlice.reducer;

  