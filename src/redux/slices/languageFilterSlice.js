import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
  language: {
    // languageId: null,
    // title:"German",
  }
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
      setLanguage: (state, action) => {
        return {
          ...state, 
          language: action.payload,
        };
      },
    resetLanguage: (state) => {
      return {
          ...state, 
          language: {},
        };
      },
    },
  });

  export const selectLanguageId = (state) => state.language.language.languageId;
  
  export const { setLanguage, resetLanguage } = languageSlice.actions;
  export default languageSlice.reducer;