import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// Reducers
export const searchReducer = createSlice({
	name: "search",
	initialState: {
		query: "",
		artist: false,
		track: false,
		album: false,
		results: [], //todo: add the interface!
		pagination: { page: 1, pages: 1 },
		favourites: [],
		openModal: false,
	},
	reducers: {
		updateQuery: (state, action) => {
			state.query = action.payload;
		},
		updateArtist: (state, action) => {
			state.artist = action.payload;
		},
		updateTrack: (state, action) => {
			state.track = action.payload;
		},
		updateAlbum: (state, action) => {
			state.album = action.payload;
		},
		updatePagination: (state, action) => {
			state.pagination = action.payload;
		},
		nextPage: (state) => {
			state.pagination.page += 1;
		},
		prevPage: (state) => {
			state.pagination.page -= 1;
		},
		updateResults: (state, action) => {
			state.results = action.payload;
		},
		updateFavourites: (state, action) => {
			state.favourites = action.payload;
		},
		updateOpenModal: (state, action) => {
			state.openModal = action.payload;
		},
	},
});
export const {
	updateQuery,
	updateArtist,
	updateTrack,
	updateAlbum,
	updateResults,
	updatePagination,
	nextPage,
	prevPage,
	updateFavourites,
	updateOpenModal,
} = searchReducer.actions;

// Selectors
export const selectSearchState = (state: RootState) => state.search;

export default searchReducer.reducer;
