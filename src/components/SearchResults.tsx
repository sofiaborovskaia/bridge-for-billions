import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { ResultInterface } from "../app/interfaces";

import ItemCard from "./ItemCard";

const token = "BKqXciLJNXcEzgKNRZXmnQxdIDFjqqTRxYiUQOyZ";
const url = "https://api.discogs.com/";

const infoIsClicked = true;

const SearchResults = () => {
	const [results, setResults] = useState<ResultInterface[]>([]);
	// Make query string come from an array or an object in the future
	const [queryString, setQueryString] = useState(
		`database/search?q=Billie%20Eilish&token=${token}`,
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

	const resultsItem = results.map((result) => {
		return (
			<li key={nanoid()} className="search-results__item">
				<img
					src={result.thumb}
					alt={result.title}
					className="search-results__thumb"
				/>
				<span className="search-results__title">{result.title}</span>
				<span className="search-results__type">{result.type}</span>
				<button>Add to favs</button>
				<button>More info</button>
				{infoIsClicked && (
					<ItemCard
						title={result.title}
						type={result.type}
						image={result.cover_image}
						year={result.year}
						format={result.format}
					/>
				)}
			</li>
		);
	});

	return <ul className="search-results">{resultsItem}</ul>;
};

export default SearchResults;
