import { useSelector, useDispatch } from "react-redux";
import {
	SearchResultsPropsInterface,
	ResultInterface,
} from "../app/interfaces";
import {
	updateResults,
	selectSearchState,
} from "../features/search/resultsSlice";
import ItemCard from "./ItemCard";

const SearchResults: React.FC<SearchResultsPropsInterface> = ({
	results,
	error,
}) => {
	const dispatch = useDispatch();
	const oldResults = useSelector(selectSearchState);

	const handleShowInfo = (id: number) => {
		const newResults = oldResults.results.map((result: ResultInterface) => {
			return result.id === id
				? { ...result, isClicked: result.isClicked ? false : true }
				: { ...result, isClicked: false };
		});
		dispatch(updateResults(newResults));
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
						onClick={() => handleShowInfo(result.id)}
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
