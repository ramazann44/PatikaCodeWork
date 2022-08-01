import {createSlice} from '@reduxjs/toolkit';

export const favList = createSlice({
  name: 'favList',
  initialState: {
    list: [],
    dup: false,
    jobsCount: 0,
  },

  reducers: {
    add: (state, action) => {
      state.list = [...state.list, action.payload];
    },

    remove: (state, action) => {
      state.list = state.list.filter(job => job.id !== action.payload);
    },

    updateJobsCount: (state, action) => {
      state.jobsCount = action.payload;
    },
  },
});

export const {add, remove, updateJobsCount} = favList.actions;
export default favList.reducer;