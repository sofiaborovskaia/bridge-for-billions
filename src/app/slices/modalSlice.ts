import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Reducers
export const modalReducer = createSlice({
	name: "modal",
	initialState: false,
	reducers: {
		updateOpenModal: (state, action) => {
			state = action.payload;
		},
	},
});

export const { updateOpenModal } = modalReducer.actions;

// Selectors
export const modalState = (state: RootState) => state.modal;

export default modalReducer.reducer;
