import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { updateFavourites } from "../app/slices/favouritesSlice";
import { updateResults } from "../app/slices/resultsSlice";
import { updateOpenModal } from "../app/slices/modalSlice";
import { ResultProps, FavouriteProps } from "../app/interfaces";

const Favourites = () => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state);

	const handleCloseModal = () => {
		dispatch(updateOpenModal(false));
	};

	const handleRemoveFromFavourites = (id: number) => {
		const updatedFavourites = state.favourites.filter(
			(favourite: FavouriteProps) => favourite.id !== id,
		);
		const updatedResults = state.results.map((result: ResultProps) => {
			return result.id === id ? { ...result, isFavourite: false } : result;
		});

		dispatch(updateFavourites(updatedFavourites));
		dispatch(updateResults(updatedResults));
	};

	return (
		<div className={state.modal.isOpen ? "favourites" : "hidden"}>
			<div className="favourites__container">
				<button className="favourites__close-button" onClick={handleCloseModal}>
					<CloseRoundedIcon />
				</button>
				<div className="favourites__title">Your collection</div>
				{state.favourites.length > 0 ? (
					<ol className="favourites__list">
						{state.favourites.map((favourite: FavouriteProps) => {
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
				) : (
					<div className="favourites__no-favourites">
						<span>No favourites yet.</span>
						<span>Start adding by pressing</span>
						<button className="search-results__add-favs-button inactive">
							Add to ❤️
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Favourites;
