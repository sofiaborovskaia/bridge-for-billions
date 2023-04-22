const HeroHeading = () => {
	return (
		<div className="hero-heading">
			<div className="hero-heading__title-wrapper">
				<span>Welcome to</span>
				<h1 className="hero-heading__title">VynilVerse</h1>
				<span className="hero-heading__version-tag"> v1.0.0</span>
			</div>

			<ul className="hero-heading__subtitle">
				<li className="hero-heading__subtitle-item">
					Search for your favourite music
				</li>
				<li className="hero-heading__subtitle-item">Create your list</li>
				<li className="hero-heading__subtitle-item">2 x faster now!</li>
			</ul>
			<div className="hero-heading__favourites-btn">My list ❤️</div>
		</div>
	);
};

export default HeroHeading;
