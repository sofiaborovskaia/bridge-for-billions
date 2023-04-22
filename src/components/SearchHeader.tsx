import Select from "react-select";

const options = [
	{ value: "artist", label: "Artist" },
	{ value: "album", label: "Album" },
	{ value: "track", label: "Track" },
];

const SearchHeader = () => {
	return (
		<div className="search-header">
			<input type="search"></input>
			<Select
				className="search-header__select"
				name="search-options"
				options={options}
				isMulti
			/>
			<button type="submit">Go!</button>
		</div>
	);
};

export default SearchHeader;
