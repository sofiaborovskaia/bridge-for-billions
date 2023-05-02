import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
	page: 1,
	pages: 1,
};

// Reducers
export const paginationReducer = createSlice({
	name: "pagination",
	initialState,
	reducers: {
		updatePagination: (state, action) => {
			state = action.payload;
		},
		nextPage: (state) => {
			state.page += 1;
		},
		prevPage: (state) => {
			state.page -= 1;
		},
	},
});

export const { updatePagination, nextPage, prevPage } =
	paginationReducer.actions;

// Selectors
export const paginationState = (state: RootState) => state.pagination;

export default paginationReducer.reducer;
