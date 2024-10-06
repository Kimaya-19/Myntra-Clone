import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone: false,  // false:'PENDING' and true:'DONE'
    loading: false,
  },
  reducers: {
    markFetchingStarted: (state) => {
      state.loading = true; // Modify the state directly
    },
    markFetchDone: (state) => {
      state.fetchDone = true;  // Modify the state directly
    },

    markFetchingFinished: (state) => {
      state.loading = false; // Modify the state directly
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
