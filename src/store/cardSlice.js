import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
        state.items.push(action.payload);
    },
    clearCartAll: (state, ) => {
        state.items = [];
    },
    clearCartOne: (state, action) => {
        // some logic come here which data we want to delete.

        state.items.pop();
    }
  } 
});

export const { addItem, clearCartAll, clearCartOne } = cardSlice.actions;

export default cardSlice.reducer;