import { useAppSelector, useAppDispatch } from "../app/hooks";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { nextPage, prevPage } from "../app/paginationSlice";

const Pagination = () => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state);

	let currentPage = state.pagination.page;
	let totalPages = state.pagination.pages;

	const handlePrevPage = () => {
		dispatch(prevPage());
	};

	const handleNextPage = () => {
		dispatch(nextPage());
	};

	return (
		<div className="pagination">
			<button
				className={currentPage < 2 ? "visually-hidden" : "pagination__button"}
				onClick={handlePrevPage}
			>
				<ArrowBackRoundedIcon />
			</button>
			<span className="pagination__number">
				{currentPage} / {totalPages && totalPages < 100 ? totalPages : "99+"}
			</span>
			<button
				className={
					currentPage === totalPages ? "visually-hidden" : "pagination__button"
				}
				onClick={handleNextPage}
			>
				<ArrowForwardRoundedIcon />
			</button>
		</div>
	);
};

export default Pagination;
