import { useState } from "react";
import {
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from "@mui/material";

const SearchHeader = () => {
	const [selectLabel, setSelectLabel] = useState("");

	const handleSelectChange = (event: SelectChangeEvent) => {
		setSelectLabel(event.target.value as string);
	};

	return (
		<div className="search-header">
			<FormControl className="search-header__select" fullWidth>
				<InputLabel id="select-label">Search by</InputLabel>
				<Select
					labelId="select-label"
					id="select"
					value={selectLabel}
					label="Search by"
					onChange={handleSelectChange}
				>
					<MenuItem value="artist">Artist</MenuItem>
					<MenuItem value="album">Album</MenuItem>
					<MenuItem value="track">Track</MenuItem>
					<MenuItem value="track">All</MenuItem>
				</Select>
			</FormControl>
			<TextField className="search-header__search-input" />
			<button className="search-header__search-button">Search!</button>
		</div>
	);
};

export default SearchHeader;
