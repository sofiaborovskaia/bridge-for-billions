import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Reducers
export const modalReducer = createSlice({
	name: "modal",
	initialState: { isOpen: false },
	reducers: {
		updateOpenModal: (state, action) => {
			state.isOpen = action.payload;
		},
	},
});

export const { updateOpenModal } = modalReducer.actions;

// Selectors
export const modalState = (state: RootState) => state.modal;

export default modalReducer.reducer;
