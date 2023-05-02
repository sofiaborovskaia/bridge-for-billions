import { useDispatch } from "react-redux";
import { updateOpenModal } from "../app/modalSlice";

const HeroHeading = () => {
	const dispatch = useDispatch();

	const handleOpenModal = () => {
		dispatch(updateOpenModal(true));
	};

	return (
		<div className="hero-heading">
			<div className="hero-heading__title-wrapper">
				<span className="hero-heading__welcome-text">Welcome to</span>
				<h1 className="hero-heading__title">VinylVerse</h1>
				<span className="hero-heading__version-tag"> v0.1.0</span>
			</div>

			<ul className="hero-heading__subtitle mobile-hide">
				<li className="hero-heading__subtitle-item">
					Search for your favourite music
				</li>
				<li className="hero-heading__subtitle-item">Create your list</li>
				<li className="hero-heading__subtitle-item">2 x faster now!</li>
			</ul>
			<span className="hero-heading__subtitle desktop-hide">
				Your ultimate music search engine
			</span>
			<div className="hero-heading__show-favs-button" onClick={handleOpenModal}>
				My list ❤️
			</div>
		</div>
	);
};

export default HeroHeading;
