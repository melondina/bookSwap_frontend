import { configureStore } from '@reduxjs/toolkit';
import cards from './slices/cardsSlice.js';



export const store = configureStore({
  reducer: {
    
    cards,
  },
});