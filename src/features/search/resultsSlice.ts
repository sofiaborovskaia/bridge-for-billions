import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { SearchState } from "../../app/interfaces";

const initialState: SearchState = {
	query: "",
	artist: true,
	track: false,
	album: false,
	results: [],
	pagination: { page: 1, pages: 1 },
	favourites: [],
	openModal: false,
};

// Reducers
export const searchReducer = createSlice({
	name: "search",
	initialState,
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

// when a new resut loads
// if its id is inside favourites[]
//     isFavourite: true
// else
//    isFavourite: falsep

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
export const selectSearchState = (state: RootState): SearchState =>
	state.search;

export default searchReducer.reducer;
