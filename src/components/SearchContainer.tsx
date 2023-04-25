import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	selectSearchState,
	updateResults,
} from "../features/search/resultsSlice";
import { ResultInterface } from "../app/interfaces";

import SearchResults from "./SearchResults";
import SearchHeader from "./SearchHeader";

const token = "BKqXciLJNXcEzgKNRZXmnQxdIDFjqqTRxYiUQOyZ";
const url = "https://api.discogs.com/database/search?";
const page = "1";

const SearchContainer = () => {
	const dispatch = useDispatch();
	const searchState = useSelector(selectSearchState);

	const [error, setError] = useState(false);

	const query = searchState.query;
	const artist = searchState.artist;
	const album = searchState.album;
	const track = searchState.track;

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

	const queryString = `${innerString}&token=${token}&page=${page}&per_page=10`;

	const fetchResults = useCallback(() => {
		(async () => {
			const request = await fetch(`${url}${queryString}`);
			const response = await request.json();
			if (!request.ok) {
				setError(true);
			} else {
				setError(false);
				const newResults = response.results.map((result: ResultInterface) => {
					return { ...result, isClicked: false };
				});
				dispatch(updateResults(newResults));
			}
		})();
	}, [queryString, dispatch]);

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
