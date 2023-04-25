import HeroHeading from "./components/HeroHeading";
import SearchContainer from "./components/SearchContainer";
import Footer from "./components/Footer";
import Favourites from "./components/Favourites";

import "./style/base.scss";

function App() {
	return (
		<div>
			<HeroHeading />
			<SearchContainer />
			<Footer />
			<Favourites />
		</div>
	);
}

export default App;
