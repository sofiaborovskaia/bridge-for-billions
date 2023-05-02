import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import resultsReducer from "./resultsSlice";
import favouritesReducer from "./favouritesSlice";
import modalReducer from "./modalSlice";
import paginationReducer from "./paginationSlice";

export const store = configureStore({
	reducer: {
		search: searchReducer,
		results: resultsReducer,
		pagination: paginationReducer,
		favourites: favouritesReducer,
		modal: modalReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
