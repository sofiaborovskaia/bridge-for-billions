import SearchResults from "./SearchResults";
import SearchHeader from "./SearchHeader";

const SearchContainer = () => {
	return (
		<div className="search-container">
			<SearchHeader />
			<SearchResults />
		</div>
	);
};

export default SearchContainer;
