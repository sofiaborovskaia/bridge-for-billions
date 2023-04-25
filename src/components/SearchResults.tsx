import { SearchResultsPropsInterface } from "../app/interfaces";
import ItemCard from "./ItemCard";

const SearchResults: React.FC<SearchResultsPropsInterface> = ({
	results,
	error,
}) => {
	const openInfoHandler = (id: number) => {
		// setResults((oldResults) => {
		// 	return oldResults.map((result) => {
		// 		return result.id === id
		// 			? { ...result, isClicked: result.isClicked ? false : true }
		// 			: { ...result, isClicked: false };
		// 	});
		// });
	};

	const SearchResults = results.map((result) => {
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
						onClick={() => openInfoHandler(result.id)}
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

	return (
		<>
			{results.length > 0 && (
				<ul className="search-results">{SearchResults}</ul>
			)}
			{error && <p>Something went wrong :( </p>}
		</>
	);
};

export default SearchResults;
