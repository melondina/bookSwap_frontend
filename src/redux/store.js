import { configureStore } from '@reduxjs/toolkit';
import cards from './slices/cardsSlice.js';
import user from './slices/usersSlice.js';
import language from './slices/languageFilterSlice.js';
import location from './slices/locationFilterSlice.js';
import category from './slices/categoryFilterSlice.js';
import navigation from './slices/navigationSlice.js';


export const store = configureStore({
  reducer: {
    cards, user, language, location, category, navigation,
  },
  devTools: true
});

