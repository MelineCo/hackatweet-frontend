import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const tweetsSlice = createSlice({
  name: 'tweets',

  initialState,
  reducers: {
    addTweet: (state, action) => {
      state.value.push(action.payload);
    },
    loadTweets: (state, action) => {
        state.value = action.payload;
    },
    // updateTweet: (state, action) => {
    // }
    // deleteTweet: (state, action) => {
    // }
  },
});

export const { loadTweets, addTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;