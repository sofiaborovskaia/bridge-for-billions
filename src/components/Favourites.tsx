import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Favourites = () => {
	return (
		<div className="favourites">
			<div className="favourites__container">
				<button className="favourites__close-button">
					<CloseRoundedIcon />
				</button>
				<div className="favourites__title">Your collection</div>
				<ol className="favourites__list">
					<li className="favourites__list-item">Francis Rossi</li>
					<li className="favourites__list-item">Francis Rossi</li>
					<li className="favourites__list-item">Rick Parfitt</li>
					<li className="favourites__list-item">John Barnes</li>
					<li className="favourites__list-item">Francis Rossi</li>
					<li className="favourites__list-item">John Barnes</li>
				</ol>
			</div>
		</div>
	);
};

export default Favourites;
