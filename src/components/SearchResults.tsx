import { useSelector, useDispatch } from "react-redux";
import { ResultsProps, ResultProps } from "../app/interfaces";
import {
	updateResults,
	updateFavourites,
	selectSearchState,
} from "../features/search/resultsSlice";
import ItemCard from "./ItemCard";
import Pagination from "./Pagination";

const SearchResults: React.FC<ResultsProps> = ({ results, error }) => {
	const dispatch = useDispatch();
	const searchState = useSelector(selectSearchState);

	const handleShowInfo = (id: number) => {
		const updatedResults = searchState.results.map((result: ResultProps) => {
			return result.id === id
				? { ...result, isClicked: result.isClicked ? false : true }
				: { ...result, isClicked: false };
		});
		dispatch(updateResults(updatedResults));
	};

	const handleAddToFavourites = (id: number, title: string) => {
		const updatedFavourites = [
			...searchState.favourites,
			{ id: id, title: title },
		];
		const updatedResults = searchState.results.map((result: ResultProps) => {
			return result.id === id ? { ...result, isFavourite: true } : result;
		});

		dispatch(updateFavourites(updatedFavourites));
		dispatch(updateResults(updatedResults));
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

					<button
						className={
							result.isFavourite
								? "search-results__add-favs-button disabled"
								: "search-results__add-favs-button"
						}
						onClick={() => handleAddToFavourites(result.id, result.title)}
					>
						{result.isFavourite ? "In favourites" : "Add to ❤️"}
					</button>

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
			{results && results.length > 0 && (
				<>
					<ul className="search-results">{SearchResults}</ul>
					<Pagination />
				</>
			)}
			{error && <p>Something went wrong :( </p>}
		</>
	);
};

export default SearchResults;
