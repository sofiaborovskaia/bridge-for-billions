import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const savedFavourites = localStorage.getItem("favourites");
const initialFavourites = savedFavourites ? JSON.parse(savedFavourites) : [];
const initialState = { items: initialFavourites };

// Reducers
export const favouritesReducer = createSlice({
	name: "favourites",
	initialState,
	reducers: {
		updateFavourites: (state, action) => {
			state.items = action.payload;
		},
	},
});

export const { updateFavourites } = favouritesReducer.actions;

// Selectors
export const selectSearchState = (state: RootState) => state.favourites;

export default favouritesReducer.reducer;
