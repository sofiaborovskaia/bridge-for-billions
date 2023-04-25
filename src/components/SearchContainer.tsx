import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSearchState } from "../features/search/resultsSlice";
import { ResultInterface } from "../app/interfaces";

import SearchResults from "./SearchResults";
import SearchHeader from "./SearchHeader";

const token = "BKqXciLJNXcEzgKNRZXmnQxdIDFjqqTRxYiUQOyZ";
const url = "https://api.discogs.com/database/search?";
const page = "1";

const SearchContainer = () => {
	// const dispatch = useDispatch();
	const searchState = useSelector(selectSearchState);

	const [results, setResults] = useState<ResultInterface[]>([]);
	const [error, setError] = useState(false);

	const query = searchState.query;
	const artist = searchState.artist;
	const album = searchState.album;
	const track = searchState.track;

	let artistString = `&artist=${query}`;
	let albumString = `&format=album&title=${query}`;
	let trackString = `&track=${query}`;

	let innerStringArr = [];

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
			console.log(`${url}${queryString}`);
			const request = await fetch(`${url}${queryString}`);
			const response = await request.json();
			if (!request.ok) {
				setError(true);
			} else {
				setError(false);
				setResults(
					response.results.map((result: ResultInterface) => {
						return { ...result, isClicked: false };
					}),
				);
			}
		})();
	}, [queryString]);

	useEffect(() => {
		fetchResults();
	}, [fetchResults]);

	const handleOnClick = () => {
		console.log("search!");
		fetchResults();
	};

	return (
		<div className="search-container">
			<SearchHeader handleOnClick={handleOnClick} />
			<SearchResults results={results} error={error} />
		</div>
	);
};

export default SearchContainer;
