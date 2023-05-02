import { useEffect, useState, useCallback } from "react";
import { ResultProps, FavouriteProps } from "../app/interfaces";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { updateResults } from "../app/slices/resultsSlice";
import { updatePagination } from "../app/slices/paginationSlice";

import SearchResults from "./SearchResults";
import SearchHeader from "./SearchHeader";

const token = "BKqXciLJNXcEzgKNRZXmnQxdIDFjqqTRxYiUQOyZ";
const url = "https://api.discogs.com/database/search?";

const SearchContainer = () => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state);

	const [error, setError] = useState(false);

	const query = state.search.query;
	const artist = state.search.artist;
	const album = state.search.album;
	const track = state.search.track;
	const page = state.pagination.page;

	let artistString = `&artist=${query}`;
	let albumString = `&format=album&title=${query}`;
	let trackString = `&track=${query}`;

	let innerString;
	if (artist && album && track) {
		innerString = `q=${query}`;
	} else {
		innerString = `${artist ? artistString : ""}${album ? albumString : ""}${
			track ? trackString : ""
		}`;
	}

	const queryString = `${innerString}&token=${token}&page=${page}&per_page=7`;

	const fetchResults = useCallback(() => {
		(async () => {
			const request = await fetch(`${url}${queryString}`);

			if (!request.ok) {
				setError(true);
			} else {
				setError(false);
				const response = await request.json();

				const newResults = response.results.map((result: ResultProps) => {
					const favourites = state.favourites;
					const isFavourite =
						favourites.length > 0 &&
						favourites.some(
							(favourite: FavouriteProps) => favourite.id === result.id,
						);

					return { ...result, isClicked: false, isFavourite: isFavourite };
				});
				const newPagination = {
					page: response.pagination.page,
					pages: response.pagination.pages,
				};

				dispatch(updateResults(newResults));
				dispatch(updatePagination(newPagination));
			}
		})();
	}, [queryString, dispatch, state.favourites]);

	useEffect(() => {
		fetchResults();
	}, [fetchResults]);

	return (
		<div className="search-container">
			<SearchHeader />
			<SearchResults results={state.results} error={error} />
		</div>
	);
};

export default SearchContainer;
