import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
	query: "",
	artist: true,
	track: true,
	album: true,
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
	},
});

export const { updateQuery, updateArtist, updateTrack, updateAlbum } =
	searchReducer.actions;

// Selectors
export const selectSearchState = (state: RootState) => state.search;

export default searchReducer.reducer;
