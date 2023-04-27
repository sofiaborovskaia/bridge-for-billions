import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	selectSearchState,
	updateResults,
	updatePagination,
} from "../app/globalSlice";
import { ResultProps } from "../app/interfaces";

import SearchResults from "./SearchResults";
import SearchHeader from "./SearchHeader";

const token = "BKqXciLJNXcEzgKNRZXmnQxdIDFjqqTRxYiUQOyZ";
const url = "https://api.discogs.com/database/search?";

const SearchContainer = () => {
	const dispatch = useDispatch();
	const searchState = useSelector(selectSearchState);

	const [error, setError] = useState(false);

	const query = searchState.query;
	const artist = searchState.artist;
	const album = searchState.album;
	const track = searchState.track;
	const page = searchState.pagination.page;

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
					const favourites = searchState.favourites;
					const isFavourite =
						favourites.length > 0 &&
						favourites.some((favourite) => favourite.id === result.id);

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
	}, [queryString, dispatch, searchState.favourites]);

	useEffect(() => {
		fetchResults();
	}, [fetchResults]);

	return (
		<div className="search-container">
			<SearchHeader />
			<SearchResults results={searchState.results} error={error} />
		</div>
	);
};

export default SearchContainer;
