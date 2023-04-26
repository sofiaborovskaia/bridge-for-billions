import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import {
	selectSearchState,
	updateFavourites,
	updateResults,
	updateOpenModal,
} from "../features/search/resultsSlice";

const Favourites = () => {
	const dispatch = useDispatch();
	const searchState = useSelector(selectSearchState);

	// + create a state for favourites
	// + on click add item to favourites if it's not there -- dispatch updateFavourites in search results
	// + render favourites in the list -- useSelector in favourites
	// + on click on remove button remove it from the store -- dispatch updateFavourites in favourites

	// update add to favs button to print "Added to <3":

	// set item called favourites in local storage [{id: "", title ""}, {id: "", title ""}, {id: "", title ""}]

	const handleCloseModal = () => {
		dispatch(updateOpenModal(false));
	};

	const handleRemoveFromFavourites = (id) => {
		const updatedFavourites = searchState.favourites.filter(
			(favourite) => favourite.id !== id,
		);
		const updatedResults = searchState.results.map(
			(result: ResultInterface) => {
				return result.id === id ? { ...result, isFavourite: false } : result;
			},
		);

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
					{searchState.favourites.map((favourite, index) => {
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
