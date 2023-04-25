import { useSelector, useDispatch } from "react-redux";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import {
	nextPage,
	prevPage,
	selectSearchState,
} from "../features/search/resultsSlice";

const Pagination = () => {
	const dispatch = useDispatch();
	const searchState = useSelector(selectSearchState);

	let currentPage = searchState.pagination.page;
	let totalPages = searchState.pagination.pages;

	const handlePrevPage = () => {
		dispatch(prevPage());
	};

	const handleNextPage = () => {
		dispatch(nextPage());
	};

	return (
		<div className="pagination">
			<button
				className={currentPage < 2 ? "invisible" : "pagination__button"}
				onClick={handlePrevPage}
			>
				<ArrowBackRoundedIcon />
			</button>
			<span className="pagination__number">
				{currentPage} / {totalPages && totalPages < 100 ? totalPages : "99+"}
			</span>
			<button
				className={
					currentPage === totalPages ? "invisible" : "pagination__button"
				}
				onClick={handleNextPage}
			>
				<ArrowForwardRoundedIcon />
			</button>
		</div>
	);
};

export default Pagination;
