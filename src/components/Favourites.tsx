import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import {
	selectSearchState,
	updateFavourites,
	updateResults,
	updateOpenModal,
} from "../features/search/resultsSlice";
import { ResultProps } from "../app/interfaces";

const Favourites = () => {
	const dispatch = useDispatch();
	const searchState = useSelector(selectSearchState);

	const handleCloseModal = () => {
		dispatch(updateOpenModal(false));
	};

	const handleRemoveFromFavourites = (id: number) => {
		const updatedFavourites = searchState.favourites.filter(
			(favourite) => favourite.id !== id,
		);
		const updatedResults = searchState.results.map((result: ResultProps) => {
			return result.id === id ? { ...result, isFavourite: false } : result;
		});

		dispatch(updateFavourites(updatedFavourites));
		dispatch(updateResults(updatedResults));
	};

	return (
		<div className={searchState.openModal ? "favourites" : "hidden"}>
			<div className="favourites__container">
				<button className="favourites__close-button" onClick={handleCloseModal}>
					<CloseRoundedIcon />
				</button>
				<div className="favourites__title">Your collection</div>
				<ol className="favourites__list">
					{searchState.favourites.map((favourite) => {
						return (
							<li key={favourite.id} className="favourites__list-item">
								<span className="favourite-text">{favourite.title}</span>
								<button
									className="favourite-remove-button"
									onClick={() => handleRemoveFromFavourites(favourite.id)}
								>
									<DeleteIcon fontSize="small" />
								</button>
							</li>
						);
					})}
				</ol>
			</div>
		</div>
	);
};

export default Favourites;
