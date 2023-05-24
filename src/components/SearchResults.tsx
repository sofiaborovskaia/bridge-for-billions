import { ResultsProps, ResultProps } from "../app/interfaces";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { updateResults } from "../app/slices/resultsSlice";
import { updateFavourites } from "../app/slices/favouritesSlice";
import ItemCard from "./ItemCard";
import Pagination from "./Pagination";

const SearchResults: React.FC<ResultsProps> = ({ results, error }) => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state);

	const handleShowInfo = (id: number) => {
		const updatedResults = state.results.items.map((result: ResultProps) => {
			return result.id === id
				? { ...result, isClicked: result.isClicked ? false : true }
				: { ...result, isClicked: false };
		});
		dispatch(updateResults(updatedResults));
	};

	const handleAddToFavourites = (id: number, title: string) => {
		debugger;
		const updatedFavourites = [...state.favourites, { id: id, title: title }];
		const updatedResults = state.results.items.map((result: ResultProps) => {
			return result.id === id ? { ...result, isFavourite: true } : result;
		});

		dispatch(updateFavourites(updatedFavourites));
		dispatch(updateResults(updatedResults));
		//localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
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
					{result.thumb ? (
						<img
							src={result.thumb}
							alt={result.title}
							className="search-results__thumb"
						/>
					) : (
						<div className="search-results__thumb">
							{result.title.substring(0, 1)}
						</div>
					)}

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
			{!error && results && results.length > 0 && (
				<>
					<ul className="search-results">{SearchResults}</ul>
					<Pagination />
				</>
			)}
			{!error && results && results.length === 0 && (
				<p className="search-results__no-results">
					No results that match your search. Try again!
				</p>
			)}
			{error && (
				<p className="search-results__no-results">
					Something went wrong 🤨 Try again later!
				</p>
			)}
		</>
	);
};

export default SearchResults;
