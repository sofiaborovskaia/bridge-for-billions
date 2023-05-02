import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Reducers
export const resultsReducer = createSlice({
	name: "results",
	initialState: [],
	reducers: {
		updateResults: (state, action) => {
			state = action.payload;
		},
	},
});

export const { updateResults } = resultsReducer.actions;

// Selectors
export const selectSearchState = (state: RootState) => state.results;

export default resultsReducer.reducer;
