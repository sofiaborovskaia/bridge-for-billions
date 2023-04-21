import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Result } from "../app/interfaces";

const token = "BKqXciLJNXcEzgKNRZXmnQxdIDFjqqTRxYiUQOyZ";
const url = "https://api.discogs.com/";

const SearchResults = () => {
	const [results, setResults] = useState<Result[]>([]);
	// Make query string come from an array or an object in the future
	const [queryString, setQueryString] = useState(
		`database/search?q=Billie%20Eilish&type=artist&token=${token}`,
	);

	useEffect(() => {
		console.log(`${url}${queryString}`);
		const fetchResults = async () => {
			const request = await fetch(`${url}${queryString}`);
			const response = await request.json();
			if (!request.ok) {
				// Falsy response
			} else {
				setResults(response.results);
				console.log(response.results);
			}
		};
		fetchResults();
	}, []);

	const resultsWrapper = results.map((result) => {
		return <li key={nanoid()}>{result.type}</li>;
	});

	return <div className="search-results">{resultsWrapper}</div>;
};

export default SearchResults;
