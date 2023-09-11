import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
  category: {
    // categoryId: null,
    // title:"Roman",
  }
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
      setCategory: (state, action) => {
        return {
          ...state,
        category: action.payload,
        };
      },
      resetCategory: (state) => {
        return {
          ...state,
          category: {},
        };
      },
    },
  });

  export const selectCategoryId = (state) => state.category.category.categoryId;
  
  export const { setCategory, resetCategory } = categorySlice.actions;
  export default categorySlice.reducer;