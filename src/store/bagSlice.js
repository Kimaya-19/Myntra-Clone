import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      // Check if the item already exists in the bag
      const existingItem = state.find(bagItem => bagItem.id === action.payload.id);
      if (!existingItem) {
        state.push(action.payload); // Add the item if it doesn't exist
      }
    },
    removeFromBag: (state, action) => {
      // Filter out the item by its ID
      return state.filter(bagItem => bagItem.id !== action.payload); 
    },
  },
});

export const bagActions = bagSlice.actions;

export default bagSlice;
