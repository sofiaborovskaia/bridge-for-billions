import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const searchReducer = createSlice({
	name: "queryString",
	initialState: {
		query: "",
		artist: false,
		track: false,
		album: false,
		loading: false,
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
	},
});

export const selectSearchState = (state: RootState) => state.search; //todo: change search to quiery?

export const { updateQuery, updateArtist, updateTrack, updateAlbum } =
	searchReducer.actions;

export default searchReducer.reducer;
