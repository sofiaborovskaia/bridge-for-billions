import { useEffect, useState } from "react";
import { ResultInterface } from "../app/interfaces";

import ItemCard from "./ItemCard";

const token = "BKqXciLJNXcEzgKNRZXmnQxdIDFjqqTRxYiUQOyZ";
const url = "https://api.discogs.com/";

const SearchResults = () => {
	const [results, setResults] = useState<ResultInterface[]>([]);
	// Make query string come from an array or an object in the future
	const [queryString, setQueryString] = useState(
		`database/search?q=Billie%20Eilish&token=${token}`,
	);

	useEffect(() => {
		const fetchResults = async () => {
			const request = await fetch(`${url}${queryString}`);
			const response = await request.json();
			if (!request.ok) {
				// Falsy response
			} else {
				setResults(
					response.results.map((result: ResultInterface) => {
						return { ...result, isClicked: false };
					}),
				);
			}
		};
		fetchResults();
	}, [queryString]);

	const openInfo = (id: number) => {
		setResults((oldResults) => {
			return oldResults.map((result) => {
				return result.id === id
					? { ...result, isClicked: result.isClicked ? false : true }
					: { ...result, isClicked: false };
			});
		});
	};

	const resultsItem = results.map((result) => {
		return (
			<li key={result.id} className="search-results__result">
				<div
					className={
						result.isClicked
							? "search-results__inline-result active"
							: "search-results__inline-result"
					}
				>
					<img
						src={result.thumb}
						alt={result.title}
						className="search-results__thumb"
					/>
					<span className="search-results__title">{result.title}</span>
					<span className="search-results__type">{result.type}</span>

					<button className="search-results__add-favs-button">Add to ❤️</button>
					<button
						className="search-results__toggle-info-button"
						onClick={() => openInfo(result.id)}
					>
						More info
					</button>
				</div>
				{result.isClicked && (
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
