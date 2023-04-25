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
		results: [],
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
		updateResults: (state, action) => {
			state.results = action.payload;
		},
	},
});

// Selectors
export const selectSearchState = (state: RootState) => state.search; //todo: change search to quiery?

export const {
	updateQuery,
	updateArtist,
	updateTrack,
	updateAlbum,
	updateResults,
} = searchReducer.actions;

export default searchReducer.reducer;
