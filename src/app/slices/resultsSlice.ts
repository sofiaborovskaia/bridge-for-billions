import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Reducers
export const resultsReducer = createSlice({
	name: "results",
	initialState: { items: [] },
	reducers: {
		updateResults: (state, action) => {
			state.items = action.payload;
		},
	},
});

export const { updateResults } = resultsReducer.actions;

// Selectors
export const selectSearchState = (state: RootState) => state.results;

export default resultsReducer.reducer;
