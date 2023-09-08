import { createSlice } from '@reduxjs/toolkit';

const initialState = { };

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
      setLanguage: (state, action) => {
        return action.payload;
      },
      resetLanguage: () => [],
    },
  });
  
  export const { setLanguage, resetLanguage } = languageSlice.actions;
  export default languageSlice.reducer;