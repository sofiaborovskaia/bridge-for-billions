import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import resultsReducer from "./slices/resultsSlice";
import favouritesReducer from "./slices/favouritesSlice";
import modalReducer from "./slices/modalSlice";
import paginationReducer from "./slices/paginationSlice";

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
