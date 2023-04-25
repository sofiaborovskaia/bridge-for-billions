import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const Pagination = () => {
	// Create a state for current page
	// create a state for total pages

	// prev - active num / total num - next

	let currentPage = 1;
	let totalPages = 16;

	return (
		<div className="pagination">
			<button className={currentPage < 2 ? "invisible" : "pagination__button"}>
				<ArrowBackRoundedIcon />
			</button>
			<span className="pagination__number">
				{currentPage}/{totalPages}
			</span>
			<button
				className={
					currentPage === totalPages ? "invisible" : "pagination__button"
				}
			>
				<ArrowForwardRoundedIcon />
			</button>
		</div>
	);
};

export default Pagination;
