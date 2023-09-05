import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: {}
};

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
})

export const { setUser } = usersSlice.actions;

export default usersSlice.reducer;