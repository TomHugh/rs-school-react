import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const searchQuerySlice = createSlice({
  name: 'searchQuery',
  initialState: { value: '' },
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setQuery } = searchQuerySlice.actions;

export default searchQuerySlice.reducer;
